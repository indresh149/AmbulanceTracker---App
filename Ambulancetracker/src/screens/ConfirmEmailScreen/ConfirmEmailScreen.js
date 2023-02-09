import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../compenents/CustomInput';
import CustomButton from '../../compenents/CustomButton';
import SocialSignInButtons from '../../compenents/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'


const ForgotPasswordScreen = () => {

  const {control, handleSubmit} = useForm();
  
  //const [code,setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn(data);

    //console.warn('Confirm Pressed');
    navigation.navigate('Home');
  }

  const onSignInPressed = () => {
    //console.warn('Sign In Pressed');
    navigation.navigate('SignIn');
  }


  const onResendPressed = () => {
    console.warn('Resend Pressed');
    } 


  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
      <Text style = {styles.title}>Confirm your email</Text>

      <CustomInput
      name = "code"
      control = {control}
       placeholder = "Enter your confirmation code" 
       rules = {{
        required: 'Confirmation code is required',
       }}
      //  value = {code} 
      //  setValue={setCode}
       />

      <CustomButton 
      text = "Confirm" 
      onPress={handleSubmit(onConfirmPressed)} 
      />

      <CustomButton 
      text = "Resend Code" 
      onPress={onResendPressed} 
      type = "SECONDARY" 
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


export default ForgotPasswordScreen