import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles/AllPost_Style';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
        <MenuIcon name="dots-horizontal-circle-outline" style={styles.menu} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
