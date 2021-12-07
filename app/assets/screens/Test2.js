import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';



const Stack = createStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const VerificationScreen = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  return (
    <View>
      <Text>userName:{phoneNumber}</Text>
    </View>
  );
};

const ForgotPasswordScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const handleInput = (event) => {
    let temp = event.nativeEvent.text;
    setText(temp);
    console.log(temp)
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Input Text'}
        value={text}
        onChange={handleInput}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() =>
          text
            ? navigation.navigate('Verification', { phoneNumber: text })
            : alert('Please Input the text')
        }>
        <View style={styles.btn}>
          <Text style={styles.text}>NEXT</Text>
        </View>
       
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    color: 'black',
    width: 300,
    padding: 10,
   
    marginVertical: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});
