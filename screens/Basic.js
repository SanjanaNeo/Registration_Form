import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function Basic({navigation}) {

  const [radioButtons, setRadioButtons] = useState([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Male',
        value: 'Male'
    },
    {
        id: '2',
        label: 'Female',
        value: 'Female'
    }
]);
function onPressRadioButton(radioButtonsArray) {
  setRadioButtons(radioButtonsArray);
}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontWeight:"bold",fontSize:25}}>Register</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name*"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setFname(fname)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name*"
          placeholderTextColor="#003f5c"
          onChangeText={(lname) => setLname(lname)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number*"
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setPhone(phone)}
        /> 
      </View> 
      <View>
        <Text>Gender</Text>
      <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email*"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password*."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(cpassword) => setCpassword(cpassword)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}
      onPress={() =>
        navigation.navigate('Professional')
      }
      >
        <Text style={styles.loginText}>NEXT</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});