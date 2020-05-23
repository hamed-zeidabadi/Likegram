import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  Alert,
  Animated,
} from 'react-native';
import styles from '../Styles/Login_Style';
import Icon from 'react-native-vector-icons/AntDesign';
import {Easing} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {Virfy} from '../Redux/Actions';
import RNRestart from 'react-native-restart'; // Import package from node modules

const Login = ({navigation}) => {
  const refOpacityText = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Dispach = useDispatch();

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

  const _handleSubmitBtn = () => {
    const regxEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    if (!regxEmail.test(email) || email.trim() === '') {
      return Alert.alert('خطا', 'لطفا ایمیل را به صورت صحیح وارد کنید');
    }
    if (password.trim() === '') {
      return Alert.alert('خطا', 'لطفا رمز عبور را به صورت صحیح وارد کنید');
    }
    Dispach(Virfy(true));
    setTimeout(() => {
      RNRestart.Restart();
    }, 1000);
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
          LOGIN
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
            name="password"
            onChangeText={text => setPassword(text)}
          />
          <Icon name="lock1" style={styles.icons} />
        </View>
        <TouchableWithoutFeedback onPress={_handleSubmitBtn}>
          <Icon name="arrowleft" style={styles.input_icon} />
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.push('Register')}>
        <View style={styles.view_bottom}>
          <Text style={styles.view_bottom_txt}>ثبت نام</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;
