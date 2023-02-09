import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../compenents/CustomInput';
import CustomButton from '../../compenents/CustomButton';
import SocialSignInButtons from '../../compenents/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const NewPasswordScreen = () => {

  const {control,handleSubmit} = useForm();
  
  // const [code,setCode] = useState('');
  // const [newpassword,setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = (data) => {
    console.warn(data);
   // console.warn('onSubmit Pressed');
    navigation.navigate('Home');
  }

  const onSignInPressed = () => {
    //console.warn('Sign In Pressed');
    navigation.navigate('SignIn');
  }



  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
      <Text style = {styles.title}>Reset your password</Text>

      <CustomInput
      name = "code"
      control = {control}
       placeholder = "Code" 
        rules = {{
        required: 'Confirmation code is required',
        }}
      //  value = {code} 
      //  setValue={setCode}
       />
       <CustomInput
       placeholder = "Enter your new password" 
        name = "newpassword"
        control = {control}
        secureTextEntry
        rules = {{
          required: 'Password is required',
          minLength:{
            value: 8,
            message: 'Password should be at least 8 characters long',
          },
          maxLength:{
            value: 24,
            message: 'Password should be at most 24 characters long',
          },
          
          }}
      //  value = {newpassword} 
      //  setValue={setNewPassword}
       />

      <CustomButton 
      text = "Submit" 
      onPress={handleSubmit(onSubmitPressed)} 
      />

      <CustomButton 
      text = "Back to Sign in" 
      onPress={onSignInPressed} 
      type = "TERTIARY" 
      />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding : 20,
    //backgroundColor: 'white',
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    },
    text: {
        color : 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});


export default NewPasswordScreen