import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown'
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
        { label: 'Goa', value: '2' },
        { label: 'Gujrat', value: '3' },
        { label: 'Punjab', value: '4' },
      ];

      
  
        const [value, setValue] = useState(null);
    
        
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");*/
  const [addr, setAddr] = useState("");
  const [lm, setLM] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <Text style={{fontWeight:"bold",fontSize:35}}>Your Address</Text>
        
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address"
          placeholderTextColor="#003f5c"
          onChangeText={(addr) => setAddr(addr)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Landmark"
          placeholderTextColor="#003f5c"
          onChangeText={(lm) => setLM(lm)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="City"
          placeholderTextColor="#003f5c"
          onChangeText={(city) => setCity(city)}
        /> 
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

        //renderItem={renderItem}
      />
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Pincode"
          placeholderTextColor="#003f5c"
          onChangeText={(pincode) => setPincode(pincode)}
        /> 
      </View> 





      
<TouchableOpacity style={styles.loginBtn}>
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
