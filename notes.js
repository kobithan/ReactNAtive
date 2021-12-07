import { SafeAreaView } from "react-native"

//terminal commands
expo publish


//view
SafeAreaView

//shortcuts
1.select+alt+up arrow= to move a particular code into up and down
2.alt+shift+arrow ---to duplicate a code
3.rnss--to get stylesheet

//to see the virtual screen's height, scale,width
console.log(Dimensions.get("screen"));

//to install a react hook library
npm i @react-native-community/hooks


npm install react-native-animatable --save
animation="bounceIn"











<View style={{
        backgroundColor: "dodgerblue",
        width: "100%",
       height: landscape ? "100%" : "50%",
       paddingTop: Platform.OS === "android" ? 40 : 0,
       //alignItems: 'center',
       flex: 1,
       //flexDirection: "row",
       juatifyContent: "center"
      
    }}>
      <Text onPress={() => console.log("text clicked")}>Hello Huex again!</Text>
      <Text>Its an image</Text>
      <TouchableHighlight onPress={() => console.log("Imagged Tapped")}>
      <Image 
      //blurRadius={10}
      fadeDuration={1000}
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300",
        }} style={{justifyContent: "center"}}/>




      </TouchableHighlight>
      <Button
        color="orange" 
        title="click me"
        onPress={() => Alert.alert("My title", "My messages", [
          {text: "yes", onPress: () => console.log("yes")},
          {text: "No", onPress:() => console.log("No")},
          ])}/>  
      <StatusBar style="auto" />
      <View style={{backgroundColor: "gold", flex:0.5}}></View>
      <View style={{backgroundColor: "tomato", flex:0.5}}></View>
    </View>
    


    yaaa so good morning 

    so yesterday i finished my planned tutorials Anna,

    for today i have some task to do anna,