import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import { useValidation } from 'react-native-form-validator'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
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

  const checkName = () => {
    //Check for the Name TextInput
    if (!fname.trim()) {
      alert('Please Enter Name');
      return;
    }
  };

  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { fname,lname,email,phone,password,cpassword },
    });

  const _onPressButton = () => {
    validate({
      fname: { minlength: 3, maxlength: 7, required: true },
      lname: { minlength: 3, maxlength: 7, required: true },
      email: { email: true },
      phone: { numbers: true },
      cpassword: { equalPassword: password },
    });
  };

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontWeight:"bold",fontSize:25,marginBottom:50}}>Register</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name*"
          placeholderTextColor="#003f5c"
          onChangeText={(fname) => setFname(fname)}
          //onBlur={checkName}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name*"
          placeholderTextColor="#003f5c"
          onChangeText={(lname) => setLname(lname)}
          //onBlur={checkTextInput}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number*"
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setPhone(phone)}
          //onBlur={checkTextInput}
        /> 
      </View> 
      <View style={{padding:10}}>
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
          //onBlur={checkTextInput}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          //type="password"
          //onBlur={checkTextInput}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password*."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(cpassword) => setCpassword(cpassword)}
          //onBlur={checkTextInput}
        /> 

{isFieldInError('cpassword') &&
        getErrorsInField('cpassword').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}

      </View> 
      <Text>{getErrorMessages()}</Text>
      <TouchableOpacity style={styles.loginBtn}
      onPress={_onPressButton}
      
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
    marginBottom:50
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