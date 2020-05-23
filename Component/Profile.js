import React from 'react';
import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import styles from '../Styles/Profile_Style';
import Fake_Post from './Fake_Post';
import Icon from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <ImageBackground
          source={require('../assets/images/back.jpg')}
          style={styles.image}>
          <Image
            source={require('../assets/images/avatar6.png')}
            style={styles.avatar}
          />
          <Text style={{fontFamily: 'IRANYekan'}}>حامد زیدآبادی</Text>
          <View style={styles.box}>
            <Icon name="twitter" style={styles.icons} />
            <Icon name="like1" style={styles.icons} />
            <Icon name="play" style={styles.icons} />
            <Icon name="heart" style={styles.icons} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={Fake_Post}
          renderItem={({item}) => (
            <Image source={item.post} style={styles.posts} />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            marginVertical: 5,
          }}
        />
      </View>
    </View>
  );
};

export default Profile;
