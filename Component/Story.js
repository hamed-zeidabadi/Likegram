import React, {useState} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Alert,
  Modal,
} from 'react-native';
import styles from '../Styles/Story_Styles';
const Story = () => {
  const [Data, setData] = useState([
    {id: 0, img: require('../assets/images/avatar.png')},
    {id: 1, img: require('../assets/images/avatar2.png')},
    {id: 2, img: require('../assets/images/avatar3.png')},
    {id: 3, img: require('../assets/images/avatar4.png')},
    {id: 4, img: require('../assets/images/avatar5.png')},
    {id: 5, img: require('../assets/images/avatar6.png')},
    {id: 6, img: require('../assets/images/avatar7.png')},
    {id: 7, img: require('../assets/images/avatar8.png')},
    {id: 8, img: require('../assets/images/avatar9.png')},
    {id: 9, img: require('../assets/images/avatar2.png')},
    {id: 10, img: require('../assets/images/avatar4.png')},
  ]);
  const [modal, setModal] = useState(false);

  const _handelStory = id => {
    const newStory = Data.filter(item => item.id !== id);
    setData(newStory);
    Alert.alert('اوپس', 'این قسمت غیر فعال است !!');
  };

  const List = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={() => _handelStory(item.id)}>
        <View style={styles.single_story}>
          <Image
            style={[styles.avatar, {borderColor: '#6387ff'}]}
            source={item.img}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  if (Data.length === 0 || !Data) {
    return null;
  } else {
    return (
      <View style={styles.story}>
        <FlatList
          data={Data}
          renderItem={({item}) => <List item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    );
  }
};

export default Story;
