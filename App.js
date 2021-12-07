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

import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import LoginScreen from './app/assets/screens/LoginScreen';
import SignInScreen from './app/assets/screens/SignInScreen';
import RootStackScreen from './app/assets/screens/RootStackScreen';
import Test from './app/assets/screens/Test';
import Test2 from './app/assets/screens/Test2';




export default function App() {
  console.log("App executed")
  //to see the virtual screen's height, scale,width
  //console.log(useDimensions(), useDeviceOrientation());

  const {landscape} = useDeviceOrientation();

  const handlePress = () =>console.log("Text pressed");

 
  return (
    
    //<WelcomeScreen/>
  //<LoginScreen/>
    <SignInScreen/>
    //<Test/>
    //<Test2/>
    
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0,
    
  },
});
