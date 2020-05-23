import React from 'react';
import {View, StatusBar, Dimensions, Alert} from 'react-native';
import AllPost from './../Component/AllPost';
import Profile from './../Component/Profile';
import Search from './../Component/Search';
import Favorite from './../Component/favorite ';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../Component/About';

const Home = () => {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const TabScreen = () => {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden />
        <Tab.Navigator
          initialRoute="AllPost"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'AllPost') {
                iconName = focused ? 'ios-home' : 'ios-home';
              } else if (route.name === 'Search') {
                iconName = focused ? 'ios-search' : 'ios-search';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-contact' : 'ios-contact';
              } else if (route.name === 'Favorite') {
                iconName = focused
                  ? 'ios-checkmark-circle'
                  : 'ios-checkmark-circle-outline';
              }
              return (
                <Ionicons name={iconName} size={size * 1.3} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#ff2e63',
            inactiveTintColor: '#6387ff',
            labelStyle: {fontFamily: 'Dima Barf', fontSize: 17},
            style: {height: height / 10, backgroundColor: 'black'},
            adaptive: true,
          }}>
          <Tab.Screen
            name="AllPost"
            component={AllPost}
            options={{title: 'خانه'}}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{title: 'جستجو کاربر'}}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{title: 'پروفایل'}}
          />
          <Tab.Screen
            name="Favorite"
            component={Favorite}
            options={{title: 'علاقه‌مندی‌ها'}}
          />
        </Tab.Navigator>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerType="slide"
        drawerStyle={{
          width: '50%',
          backgroundColor: '#162447',
        }}
        overlayColor="transparent"
        drawerContentOptions={{
          activeTintColor: '#f9f9f9',
          itemStyle: {marginVertical: 15},
          activeBackgroundColor: '#6387ff',
          inactiveTintColor: '#ff427f',
          inactiveBackgroundColor: 'white',
          labelStyle: {
            fontFamily: 'IRANYekan',
            fontSize: 12,
          },
        }}>
        <Drawer.Screen
          name="_Home"
          component={TabScreen}
          options={{
            drawerLabel: 'خانه',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#1b1b2f' : '#1b1b2f'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
          options={{
            drawerLabel: 'جستجو',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: 'پروفایل',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorite"
          component={Favorite}
          options={{
            drawerLabel: '  پروفایل',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Home;
