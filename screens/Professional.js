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
export default function Professional({navigation}) {
    const data = [
        { label: 'Post Graduate', value: '1' },
        { label: 'Graduate', value: '2' },
        { label: 'HSC/Diploma', value: '3' },
        { label: 'SSC', value: '4' },
      ];

      const data1 = [
        { label: 2015, value: '1' },
        { label: 2016, value: '2' },
        { label: 2017, value: '3' },
        { label: 2018, value: '4' },
      ];

      const data2 = [
        { label: 'Trainee', value: '1' },
        { label: 'Associate', value: '2' },
        { label: 'Engineer', value: '3' },
        { label: 'Sr.Engineer', value: '4' },
      ];

      const data3 = [
        { label: 'HR', value: '1' },
        { label: 'Mobile', value: '2' },
        { label: 'Web', value: '3' },
        { label: 'iOS', value: '4' },
      ];
  
        const [value, setValue] = useState(null);
    
        
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");*/
  const [grade, setGrade] = useState("");
  const [exp, setExp] = useState("");
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <Text style={{fontWeight:"bold",fontSize:35}}>Your Info</Text>
        <Text style={{fontWeight:"bold",fontSize:20,marginTop:10,marginBottom:10}}>Educational Info</Text>
      </View>
      
        
      
      <Text style={{fontWeight:"bold"}}>Education*</Text>
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
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}

        //renderItem={renderItem}
      />
<Text style={{fontWeight:"bold"}}>Year of Passing*</Text>
<Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}

        //renderItem={renderItem}
      />
<Text style={{fontWeight:"bold"}}>Grade*</Text>
<View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          onChangeText={(grade) => setGrade(grade)}
        /> 
      </View> 

      <View style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf:'stretch',
    width: "100%"
  }}
/>

<Text style={{fontWeight:"bold",fontSize:20,marginTop:10,marginBottom:10}}>Professional Info</Text>

<Text style={{fontWeight:"bold"}}>Experience*</Text>
<View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          onChangeText={(exp) => setExp(exp)}
        /> 
      </View> 

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}

        //renderItem={renderItem}
      />

<Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data3}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}

        //renderItem={renderItem}
      />

<TouchableOpacity style={styles.loginBtn}
  onPress={() =>
    navigation.navigate('Basic')
  }
>
        <Text style={styles.loginText}>Previous</Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.loginBtn}
      onPress={() =>
        navigation.navigate('Address')
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
