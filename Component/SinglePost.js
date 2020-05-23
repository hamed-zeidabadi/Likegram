import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import styles from '../Styles/SinglePost_Style';
import Icon from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');

const SinglePost = ({item, avatar, username, post, handleLike}) => {
  const [Like, setLike] = useState(false);

  return (
    <View style={[styles.posts, {height: height / 1.8}]}>
      <View style={styles.top}>
        <Image style={styles.avatar} source={avatar} />
        <Text>{username}</Text>
      </View>
      <View style={styles.middle}>
        <Image source={post} style={styles.post} />
      </View>
      <View style={styles.bottom}>
        <TouchableHighlight
          onPress={() => {
            setLike(!Like);
            handleLike(!Like, item);
            !Like === true
              ? Alert.alert('موفق', 'به لیست علاقه مندی ها اضافه شد !')
              : Alert.alert('موفق', 'از لیست علاقه مندی ها حذف شد  !');
          }}>
          <Icon
            name="heart"
            style={
              Like === true
                ? [styles.like, {color: 'red'}]
                : [styles.like, {color: 'pink'}]
            }
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default SinglePost;
