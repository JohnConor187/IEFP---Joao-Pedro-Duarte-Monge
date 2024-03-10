import {
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

import BackButton from "../components/BackButton"

export default function Register({navigation}) {
  return (
    <ImageBackground
      source={{
        uri: 'https://virtualbackgrounds.site/wp-content/uploads/2020/07/cooking-in-a-white-kitchen.jpg',
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode="cover">
      <BackButton navigation={navigation}></BackButton>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

         <TextInput style={styles.txtInput} placeholder="Username"></TextInput>
         <TextInput style={styles.txtInput} placeholder="Email" inputMode="email"></TextInput>
         <TextInput style={styles.txtInput} placeholder="Password" secureTextEntry={true} ></TextInput>
         <TextInput style={styles.txtInput} placeholder="Password confirmation" secureTextEntry={true} ></TextInput>


        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Register</Text>
        </TouchableOpacity>
      
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btn: {
      width: "70%",
      backgroundColor: "#fc8c03",
      color: "white",
      height: 50,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center"
  },
  btnTxt: 
  {
    color: "white",
    fontSize: 20
  },
   txtInput: {
      width: "80%",
      backgroundColor: "rgba(255,255,255,0.5)",
      color: "white",
      height: 40,
      borderRadius: 15,
      paddingLeft: 10,
      margin: 10
  }

});