import React from 'react';
import { Text,StyleSheet,View, Button,Dimensions,Image,TouchableOpacity } from 'react-native';
import SignInScreen from './SignInScreen';
//import {LinearGradient} from 'react-native-linear-gradient';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';


const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.header}>
              <Animatable.Image
                animation="bounceIn"
                duratiom="1500"
              source={require('../kobi.png')}
              style={styles.logo}
              resizeMode='stretch'></Animatable.Image>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation= 'fadeInUpBig'>
                <Text style={styles.title}>Hey this is gobi</Text>
                <Text style={styles.text}>Sign Up to join with me</Text>
                <View><TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}> 
                   
                    <Text style={styles.textSign}>Start</Text>
                    
                </TouchableOpacity></View>
            </Animatable.View>
        </View>
    );
}







export default LoginScreen;

const {height} = Dimensions.get("screen");
const height_logo = height*0.28;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#009387"
    },

    header:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'

    },

    footer:{
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal:30
    },
    logo:{
        width:height_logo,
        height: height_logo
    },

    text: {
        color:'grey',
        marginTop:5

    },

    title:{
        color: '#05375a',
        fontSize:30,
        fontWeight: 'bold'

    },
    
    textSign: {
        color:'green',
        fontWeight: 'bold',
        fontSize:140,
    }
})