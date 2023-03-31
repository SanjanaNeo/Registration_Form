import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import { useValidation } from 'react-native-form-validator'
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome'
import UploadImage from "./UploadImage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView
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
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");

  

  
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { FirstName,LastName,email,Phone,password,ConfirmPassword },
    });


  const _onPressButton = () => {
    validate({
      FirstName: { minlength: 3, maxlength: 7, required: true },
      LastName: { minlength: 3, maxlength: 7, required: true },
      email: { email: true, required:true},
      Phone: { numbers: true, required:true},
      password: {required:true},
      ConfirmPassword: { equalPassword: password,required:true },
    });
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    
    <View style={styles.container}>
      
      <StatusBar style="auto" />
     
      <Text style={{fontWeight:"bold",fontSize:25,marginBottom:0}}>Register</Text>
      
      
      <UploadImage/>
      
      <View style={styles.inputView}>
      <Icon name="user" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name*"
          placeholderTextColor="#003f5c"
          onChangeText={(FirstName) => setFirstName(FirstName)}
          
        /> 
         
        {isFieldInError('FirstName') &&
        getErrorsInField('FirstName').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={styles.inputView}>
      <Icon name="user" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name*"
          placeholderTextColor="#003f5c"
          onChangeText={(LastName) => setLastName(LastName)}
        /> 
        {isFieldInError('LastName') &&
        getErrorsInField('LastName').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={styles.inputView}>
      <Icon name="phone" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number*"
          placeholderTextColor="#003f5c"
          onChangeText={(Phone) => setPhone(Phone)}
        /> 
        {isFieldInError('Phone') &&
        getErrorsInField('Phone').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={{padding:10}}>
        <View style={styles.radioView}>
        <Text>Gender</Text>
      <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
        </View>
        
      </View>
      <View style={styles.inputView}>
      <Icon name="envelope" size={30} color="#900" style={{padding:10}}/>
        <TextInput
        
          
          style={styles.TextInput}
          placeholder="Email*"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
        {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={styles.inputView}>
      <Icon name="lock" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Password*"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
        {isFieldInError('password') &&
        getErrorsInField('password').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      
      <View style={styles.inputView}>
      <Icon name="lock" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password*."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(ConfirmPassword) => setConfirmPassword(ConfirmPassword)}
        /> 

{isFieldInError('ConfirmPassword') &&
        getErrorsInField('ConfirmPassword').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}

      </View> 
      
      <TouchableOpacity style={styles.loginBtn}
      onPress={_onPressButton}
      >
        <Text style={styles.loginText}>Check</Text> 
      </TouchableOpacity> 
      <View>
        
      </View>
      <View style={{paddingBottom:10}}></View>
      <TouchableOpacity style={styles.loginBtn}
  onPress={() =>
    navigation.navigate('Professional')
  }
>
        <Text style={styles.loginText}>Next</Text> 
      </TouchableOpacity> 
     
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:50
  },
  image: {
    marginBottom: 40,
  },
  radioView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "100%",
    height:55,
    marginBottom: 20,
    alignSelf:"auto"
  },
  inputView: {
    flex:1,
    flexDirection:"row",
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 70,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
  },
});