import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import Home from './Home_Screen';

const Splash = () => {
  return (
    <View style={styles.splash}>
      <StatusBar hidden />
      <Image
        style={styles.logo}
        source={require('./../assets/images/Logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default Splash;

// blue : #6387ff
