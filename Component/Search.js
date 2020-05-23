import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from '../Styles/Search_Style';
import Header from './Header';
import {SearchBar} from 'react-native-elements';
import Fake_Data from './Fake_Post';

const Search = ({navigation}) => {
  const [Search, setSearch] = useState('');
  const [Data, setData] = useState([]);
  useEffect(() => {
    setData(Fake_Data);
  }, []);
  const _updateSearch = search => {
    setSearch(search);
    const FilterData = Data.filter(data => {
      return (
        data.username
          .toString()
          .toLowerCase()
          .trim()
          .indexOf(
            Search.toString()
              .toLowerCase()
              .trim(),
          ) !== -1
      );
    });
    setData(FilterData);
    if (Data.length === 0) {
      Alert.alert('خطا', 'کاربر مورد نظر شما یافت نشد !');
      setData(Fake_Data);
    }
  };
  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert('اووپس!', 'این قسمت غیر فعال است :|')}>
        <View style={styles.Card}>
          <Image style={styles.Card_img} source={item.avatar} />
          <Text style={styles.Card_txt}>{item.username}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.search}>
      <View style={styles.search_header}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.search_bar}>
        <SearchBar
          placeholder="چیزی بنویس ...."
          placeholderTextColor="#6387ff"
          showLoading={Search.length >= 2 ? true : false}
          onChangeText={_updateSearch}
          value={Search}
          clearIcon={true}
          inputStyle={styles.txtinput}
          containerStyle={{
            borderRadius: 50,
            elevation: 6,
            backgroundColor: '#d63447',
            borderColor: 'white',
          }}
          inputContainerStyle={{borderRadius: 50}}
        />
      </View>
      <View style={styles.search_result}>
        <FlatList
          keyExtractor={(item, index) => item.id || index}
          data={Data}
          renderItem={_renderItem}
        />
      </View>
    </View>
  );
};

export default Search;
