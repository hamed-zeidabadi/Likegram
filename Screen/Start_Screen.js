import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../Styles/Start_Style';
const Start = ({navigation}) => {
  return (
    <View style={styles.login}>
      <StatusBar hidden />

      <Image
        style={styles.logo}
        source={require('./../assets/images/Logo.png')}
      />
      <Text style={styles.desc}> تجربه یک لذت خوب </Text>
      <Text style={styles.desc2}>
        این اپلیکیشن جهت تست امکانات کتابخانه ری اکت نیتیو ساخته شده است :)
      </Text>
      <TouchableWithoutFeedback onPress={() => navigation.push('Login')}>
        <View style={styles.btn}>
          <Icon style={styles.btn_icon} name="arrowleft" />
          <Text style={styles.btn_text}>ورود کاربر</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.push('Register')}>
        <View style={styles.btn2}>
          <Icon style={styles.btn_icon2} name="arrowleft" />
          <Text style={styles.btn_text}> ثبت نام کاربر </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Start;
