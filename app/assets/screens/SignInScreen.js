import React, { isValidElement } from 'react';
import { Text,StyleSheet,View, Button,Dimensions,Image,TouchableOpacity, Platform, TextInput,Linking } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import  LinearGradient  from 'react-native-linear-gradient';
import Constants from 'expo-constants';
import { createStackNavigator, createAppContainer } from "react-navigation";  
  
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev';




function SignInScreen(props) {
 

    const [data, setData] = React.useState({
        email:'',
        password:'',
        check_textInputChange: false,
        secureTextEntry: true


    });

    const check_textInputChange = (val) =>{
        if(val.length == 0) {
            setData({
                ...data,
                email:val,
                check_textInputChange: false

            });
        } else {
            setData({
                ...data,
                emai:val,
                check_textInputChange: true

            });

        }

    }


    const handlePasswordChange =(val) =>{
        setData({
            ...data,
            password:val
        });
    }

    const updateSecureTextEntry =() =>{

        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

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
           <View style={styles.header}><Text style={styles.text_header}>Sign in to your account</Text></View>
           <View style={styles.footer}><Text style={styles.text_footer}>Email</Text>
           <View style={styles.action}>
               <FontAwesome
                    name='user-o' 
                    color='#05375a'
                    size={20}/>
              
               <TextInput
                    placeholder= 'Your email'
                    autoCapitalize= "none"
                    value={text}
                    style={styles.textInput}
                    onChange={handleInput}
                    onChangeText={(val)=>check_textInputChange(val)}/>
            {data.check_textInputChange?
              <Animatable.View 
              animation="bounceIn">
                    <Feather 
                    name="check-circle" 
                    color="green" 
                    size={30}/>
              </Animatable.View>
              
            :null}
               </View>

               <View style={{paddingTop:30}}>
               <Text style={styles.text_footer} >Enter Password</Text>
            
              <View style={styles.action} >
               <FontAwesome
                    name='lock' 
                    color='#05375a' 
                    size={20}/>
               <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
              <TouchableOpacity onpress={updateSecureTextEntry}>
               <Feather 
                    name="eye-off"
                    color="green"
                    size={30}/>
              </TouchableOpacity>
              

               </View>
               <View style={{alignItems: 'center',marginTop: 50}}>
               <TouchableOpacity onPress={() => Linking.openURL('#')}>
                     <Text style={styles.forgot}>
                     Forgot Password?
                    </Text>
                </TouchableOpacity>
               </View>
               </View>

               
          <View>
              <Text style={styles.bysign}>By signing in you accept thye Terms os Service and privacy policy</Text>
          </View>

          <View style={styles.button}>
          <TouchableOpacity
        onPress={() =>
          text
            ? navigation.navigate('Verification', { phoneNumber: text })
            : alert('Please Input the text')
        }>
        <View style={styles.btn}>
          <Text style={styles.text}>SignIn</Text>
        </View>
       
      </TouchableOpacity>
          </View>

          <View style={styles.end} >
              <Text  >Don't you have an account?    
              <TouchableOpacity onPress={() => Linking.openURL('#')}>
                     <Text style={styles.create}>
                      CREATE AN ACCOUNT
                    </Text>
                </TouchableOpacity></Text>
          </View>
         </View>
         
         </View>
    );
}}




const {height} = Dimensions.get("screen");
const height_logo = height*0.28;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    },

    header:{
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 10
    },

    text_header:{

        color:'black',
        fontWeight:'bold',
        fontSize: 50,
        marginTop: 50


    },

    text_footer: {

        color: '#05375a',
        fontSize: 18
    },

    footer:{
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal:30
    },

    footer_details:{
            marginTop: 'center'
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
        
        fontWeight: 'bold',
        fontSize:18,
    },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },

    textInput: {
        flex:1,
        marginTop: Platform.OS === 'android'? -12 : 0,
        paddingLeft: 18,
        paddingTop: 10,
        color: '#05375a'

    },

    button: {
   
    borderRadius: 13,
    backgroundColor: "green",
    alignSelf: "center",
    
    marginBottom: 6,
    minWidth: "80%",
    textAlign: "center",
    paddingTop:18,
    paddingLeft:115,
    paddingBottom:10,
    justifyContent:'center',
    marginTop:25,
    color: 'white'
   
    
  },

    signIn:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },

    forgot:{
        color: 'grey',
        textDecorationLine: 'underline'

    },

    create:{
        color: 'black',
       
        fontWeight: 'bold',
       
    },

    bysign:{
        
        textAlign: "center",
       paddingTop:25, 

    },
    end:{marginTop: 30,
        

    }

});

export default SignInScreen;


