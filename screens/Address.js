import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown'
import { useValidation } from 'react-native-form-validator'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function Address() {
    const data = [
        { label: 'Maharashtra', value: '1' },
        { label: 'Gujrat', value: '2' },
        { label: 'Karnataka', value: '3' },
        { label: 'Madhya Pradesh', value: '4' },
        { label: 'Delhi', value: '5' },
        { label: 'Others', value: '5' },
      ];
      const [value, setValue] = useState(null);
    
        
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");*/
  const [Address, setAddress] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { Address,Landmark,city,pincode},
    });

    const _onPressButton = () => {
      validate({
        Address: {minlength: 3,required: true },
        Landmark: {minlength: 3,required: true },
        city: {required:true},
        pincode: { minlength: 6,maxlength: 6,numbers: true, required:true},
      });
    };

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <Text style={{fontWeight:"bold",fontSize:35}}>Your Address</Text>
        
      </View>
      <View style={styles.inputView}>
      <Icon name="building" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Address"
          placeholderTextColor="#003f5c"
          onChangeText={(Address) => setAddress(Address)}
        /> 
        {isFieldInError('Address') &&
        getErrorsInField('Address').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={styles.inputView}>
      <Icon name="building" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Landmark"
          placeholderTextColor="#003f5c"
          onChangeText={(Landmark) => setLandmark(Landmark)}
        /> 
        {isFieldInError('Landmark') &&
        getErrorsInField('Landmark').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
      <View style={styles.inputView}>
      <Icon name="building" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="City"
          placeholderTextColor="#003f5c"
          onChangeText={(city) => setCity(city)}
        /> 
        {isFieldInError('city') &&
        getErrorsInField('city').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 
        
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select your state"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
      
      <View style={styles.inputView}>
      <Icon name="building" size={30} color="#900" style={{padding:10}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Pincode"
          placeholderTextColor="#003f5c"
          onChangeText={(pincode) => setPincode(pincode)}
        /> 
        {isFieldInError('pincode') &&
        getErrorsInField('pincode').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
      </View> 





      
<TouchableOpacity style={styles.loginBtn}
onPress={_onPressButton}
>
        <Text style={styles.loginText}>Check</Text> 
      </TouchableOpacity> 
      
      <TouchableOpacity style={styles.loginBtn}

>
        <Text style={styles.loginText}>Submit</Text> 
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
    marginBottom:"0.1%"
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    flex:1,
    flexDirection:"row",
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 30,
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
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight:"5%",
    backgroundColor: "#FF1493",
  },
  dropdown: {
    margin: 16,
    height: 45,
    width:'70%',
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
