/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from '../Styles/Favorite_Style';
import {useSelector} from 'react-redux';
import Header from './Header';

const Favorite = ({navigation}) => {
  const [data, setdata] = useState([]);
  const items = useSelector(state => state.data.likes);

  useEffect(() => {
    const newData = items.sort();
    setdata(newData);

    console.log('newData', newData);
  }, [items]);

  return (
    <View style={styles.main}>
      <Header style={styles.header} navigation={navigation} />
      <View style={styles.bottom}>
        <Text style={{fontFamily: 'DimaBlue', color: '#b5076b'}}>
          علاقه مندی های شما
        </Text>
        {data.length !== 0 && data ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Image source={item.post} style={styles.posts} />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={{fontFamily: 'IRANYekan', color: 'blue'}}>
            شما به هیچ جیز علاقه ندارید !!
          </Text>
        )}
      </View>
    </View>
  );
};

export default Favorite;
