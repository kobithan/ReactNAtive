import React from 'react';  
import { StyleSheet, View, Text, Button } from 'react-native';  
  
export default class ProfileScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Profile',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
    render() {  
        {/*Using the navigation prop we can get the 
              value passed from the previous screen*/}  
        const { navigation } = this.props;  
        const user_name = navigation.getParam('userName', 'NO-User');  
        const other_param = navigation.getParam('otherParam', 'some default value');  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text style={{ marginTop: 16,fontSize: 20,}}>  
                    This is Profile Screen and we receive value from Home Screen  
                </Text>  
                <Text style={styles.textStyle}>User Name: {JSON.stringify(user_name)}</Text>  
                <Text style={styles.textStyle}>Other Param: {JSON.stringify(other_param)}</Text>  
                <View style={styles.buttonStyle}>  
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
                </View>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    textStyle: {  
        fontSize: 23,  
        textAlign: 'center',  
        color: '#f00',  
    },  
  
    buttonStyle:{  
        width: "93%",  
        marginTop: 50,  
        backgroundColor: "red",  
    }  
});  