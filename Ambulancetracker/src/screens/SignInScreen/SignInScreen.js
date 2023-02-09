import { View, Text,Image ,StyleSheet,useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import Logo from '../../../assets/images/applogoamb.png';
import CustomInput from '../../compenents/CustomInput';
import CustomButton from '../../compenents/CustomButton';
import SocialSignInButtons from '../../compenents/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'
import {useForm,Controller} from 'react-hook-form'
import Lottie from 'lottie-react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInScreen = () => {
  // const [username,setUsername] = useState('');
  // const [password,setPassword] = useState('');

  const {height} = useWindowDimensions();

  const animationRef = useRef()

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  

  const onSignInPressed = (data) => {
    console.log(data);
    //console.warn('Sign In Pressed');

    //validate user
    navigation.navigate('DestinationSearch');
  }

  const onForgotPasswordPressed = () => {
    //console.warn('Forgot Password Pressed');
    navigation.navigate('ForgotPassword');
  }

  const onSignUpPressed = () => {
    //console.warn('Sign Up Pressed');
    navigation.navigate('SignUp');
  }


  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>

    <Lottie style = {[styles.logo,{height:height*0.3}]} 
     ref = {animationRef}
        //style = {{flex:1}}
        source = {require('../../../assets/animation/115223-hospital.json')}
        loop = {true}
        autoPlay = {true}
        //speed = {0.5}
    />
      
    {/*
      <Image source = {Logo} style = {[styles.logo,{height:height*0.3}]} 
      resizeMode="contain"
      />

      */
  }
  

      <CustomInput
      name = "Phone Number"
       placeholder = "Phone Number" 
       control={control}
       rules = {{required: 'Phone Number is required'}}
       />
      <CustomInput 
      name = "password"
      placeholder = "Password" 
      secureTextEntry
      control={control}
      rules = {{required: 'Password is required',minLength:{value: 3,message: 'Password should be minimum 3 characters long'}}}
      />
  

      <CustomButton 
      text = "Sign In" 
      onPress={handleSubmit(onSignInPressed)} 
      />
      <CustomButton 
      text = "Forgot password" 
      onPress={onForgotPasswordPressed} 
      type = "TERTIARY" 
      />
      <SocialSignInButtons/>
      
      <CustomButton 
      text = "Don't have an account? Create one" 
      onPress={onSignUpPressed} 
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
  logo: {
    width: '200%',
    maxWidth: 1000,
    maxHeight:200,

    
  },
});


export default SignInScreen