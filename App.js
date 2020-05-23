/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Login from './Screen/Login_Screen';
import Splash from './Screen/Splash_Screen';
import Register from './Screen/Register_Screen';
import Start from './Screen/Start_Screen';
import Home from './Screen/Home_Screen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const App = ({navigation}) => {
  const [IsSplash, setIsSplash] = useState(true);
  const [userToken, setuserToken] = useState(true); // defult : false
  const token = useSelector(state => state.data.token);
  // apply splash screen in 2s
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
      // setuserToken(token); if active auth , delete comment this line
    }, 2000);
  }, []);

  if (IsSplash === true) {
    return <Splash />;
  }

  const StartStack = createStackNavigator();
  // if user not logein اگر کاربر لاگین نکرده بود
  if ((IsSplash === false && userToken === null) || userToken === false) {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavigationContainer headerMode="none" independent={true}>
          <StartStack.Navigator>
            <StartStack.Screen
              options={{
                headerShown: false,
              }}
              name="start"
              component={Start}
            />
            <StartStack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={Login}
            />
            <StartStack.Screen
              options={{
                headerShown: false,
              }}
              name="Register"
              component={Register}
            />
            <StartStack.Screen
              options={{
                headerShown: false,
              }}
              name="Splash"
              component={Splash}
            />
          </StartStack.Navigator>
        </NavigationContainer>
      </View>
    );
  }

  // if user login  اگر کاربر لاگین کرده بود

  if ((IsSplash === false && userToken !== null) || userToken !== false) {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Home />
      </View>
    );
  }
};

export default App;
