import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
   StyleSheet, 
   Text, 
   View, 
   Image,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Alert,
    SafeAreaView,
    Platform,
    Dimensions
    
} from 'react-native';
import { useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import LoginScreen from './app/assets/screens/LoginScreen';
import SignInScreen from './app/assets/screens/SignInScreen';
import RootStackScreen from './app/assets/screens/RootStackScreen';
import Test from './app/assets/screens/Test';
import Test2 from './app/assets/screens/Test2';
import HomeScreen from './app/assets/screens/HomeScreen';  
import ProfileScreen from './app/assets/screens/ProfileScreen';  




const AppNavigator = createStackNavigator(  
  {  
      Home: HomeScreen,  
      Profile: ProfileScreen  
  },  
  {  
      initialRouteName: "Home"  
  }  
);  
export default createAppContainer(app);  