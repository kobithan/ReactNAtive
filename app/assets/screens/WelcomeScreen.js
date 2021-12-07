import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
function WelcomeScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
            }}>
                <View style = {styles.loginButton}></View>
                <View style = {styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({  
    background: {
        flex:1,
        justifyContent:"flex-end"
    },

    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: "tomato",
        top: 10,
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor: "green",
        top: 10,
    },
})

export default WelcomeScreen;


