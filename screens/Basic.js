import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import { useValidation } from 'react-native-form-validator'
import * as ImagePicker from 'expo-image-picker';
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

  

  
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { fname,lname,email,phone,password,cpassword },
    });


  const _onPressButton = () => {
    validate({
      fname: { minlength: 3, maxlength: 7, required: true },
      lname: { minlength: 3, maxlength: 7, required: true },
      email: { email: true, required:true},
      phone: { numbers: true, required:true},
      password: {required:true},
      cpassword: { equalPassword: password,required:true },
    });
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
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
      
      <Text style={{fontWeight:"bold",fontSize:25,marginBottom:50}}>Register</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name*"
          placeholderTextColor="#003f5c"
          onChangeText={(fname) => setFname(fname)}
          //onBlur={checkName}
        /> 
        {isFieldInError('fname') &&
        getErrorsInField('fname').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name*"
          placeholderTextColor="#003f5c"
          onChangeText={(lname) => setLname(lname)}
          //onBlur={checkTextInput}
        /> 
        {isFieldInError('lname') &&
        getErrorsInField('lname').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number*"
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setPhone(phone)}
          //onBlur={checkTextInput}
        /> 
        {isFieldInError('phone') &&
        getErrorsInField('phone').map(errorMessage => (
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
        <TextInput
        
          
          style={styles.TextInput}
          placeholder="Email*"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          //onBlur={checkTextInput}
        /> 
        {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
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
        {isFieldInError('password') &&
        getErrorsInField('password').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password*."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(cpassword) => setCpassword(cpassword)}
        /> 

{isFieldInError('cpassword') &&
        getErrorsInField('cpassword').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}

      </View> 
      
      <TouchableOpacity style={styles.loginBtn}
      onPress={_onPressButton}
      >
        <Text style={styles.loginText}>Submit</Text> 
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
    justifyContent: "center",
    marginBottom:50
  },
  image: {
    marginBottom: 40,
  },
  radioView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "100%",
    height: 90,
    marginBottom: 20,
    alignItems: "center",
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
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
  },
});