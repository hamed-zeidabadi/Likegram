import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  Alert,
  Animated,
  Platform,
  NetInfo,
} from 'react-native';
import axios from 'axios';
import styles from '../Styles/Register_Style';
import Icon from 'react-native-vector-icons/AntDesign';
import {Easing} from 'react-native-reanimated';
const Register = ({navigation}) => {
  const refOpacityText = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    _animationFade();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const _animationFade = () => {
    Animated.timing(refOpacityText, {
      toValue: 1,
      duration: 3000,
      // easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(refOpacityText, {
        toValue: 0.2,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => _animationFade());
    });
  };
  const _handleSubmitBtn = async () => {
    const regxEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    //check email چک کردن شکل صحیح ایمیل
    if (!regxEmail.test(email) || email.trim() === '') {
      return Alert.alert('خطا', 'لطفا ایمیل را به صورت صحیح وارد کنید');
    }
    //check empty password چک کردن خالی نبودن رمز عبور
    if (password.trim() === '' || password2.trim() === '') {
      return Alert.alert('خطا', 'فیلد رمز عبور نباید خالی باشد !');
    }
    //check equal password  چک کردن مساوی بودن رمز عبور اول و دوم
    if (password !== password2) {
      return Alert.alert('خطا', 'اوپس ! کلمه عبور همسان نیست !');
    }
    //check password length چک کردن تعداد کاراکتر حداقل 6 حرف برای رمز عبور
    if (password.trim().length >= 1 && password.trim().length <= 5) {
      return Alert.alert('خطا', 'رمز عبور حداقل باید 6 کاراکتر باشد');
    }
    if (Platform.OS === 'android') {
      //check internt User in Android !!  اتصال به اینترنت را فقط برای اندروید چک کردم
      NetInfo.isConnected.fetch().then(isConnected => {
        if (!isConnected) {
          Alert.alert('ثبت نام ناموفق', 'اتصال اینترنت خود را چک کنید !');
        }
      });
    }

    try {
      const data = {
        email,
        password,
      };
      const api = 'http://localhost:5000/api/register';
      const config = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post(api, data, config);
      const DATA = await response.data;
      console.log('data :', data);
    } catch (error) {
      Alert.alert('خطا', 'خطا در برقراری ارتباط');
    }

    console.log('email :', email);
    console.log('password :', password);
  };

  return (
    <View style={styles.main}>
      <StatusBar hidden />
      <View>
        <View style={styles.shape} />
        <View style={styles.shape2} />
        <View style={styles.shape3} />
        <View style={styles.shape4} />
      </View>
      <View style={styles.Viewtext}>
        <Animated.Text style={[styles.Viewtext_txt, {opacity: refOpacityText}]}>
          REGISTER
        </Animated.Text>
      </View>
      <View style={styles.input}>
        <View style={styles.input_username}>
          <TextInput
            placeholder={'ایمیل'}
            style={styles.textInput}
            name="email"
            onChangeText={text => setEmail(text)}
          />

          <Icon name="user" style={styles.icons} />
        </View>

        <View style={styles.input_password}>
          <TextInput
            secureTextEntry
            autoCorrect={false}
            placeholder={'کلمه عبور'}
            style={styles.textInput}
            onChangeText={text => setPassword(text)}
          />
          <Icon name="lock1" style={styles.icons} />
        </View>
        <View style={styles.input_password}>
          <TextInput
            secureTextEntry
            autoCorrect={false}
            placeholder={'تکرار کلمه عبور'}
            style={styles.textInput}
            onChangeText={text => setPassword2(text)}
          />
          <Icon name="lock1" style={styles.icons} />
        </View>
        <TouchableWithoutFeedback onPress={_handleSubmitBtn}>
          <Icon
            name={
              email.trim() !== '' &&
              password.trim() !== '' &&
              password2.trim() !== ''
                ? 'check'
                : 'close'
            }
            style={
              email.trim() !== '' &&
              password.trim() !== '' &&
              password2.trim() !== ''
                ? [styles.input_icon, {backgroundColor: '#ff2e63'}]
                : [styles.input_icon, {backgroundColor: '#6387ff'}]
            }
          />
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.push('Login')}>
        <View style={styles.view_bottom}>
          <Text style={styles.view_bottom_txt}>ورود</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Register;
