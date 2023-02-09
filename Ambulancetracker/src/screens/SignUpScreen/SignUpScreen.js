import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import CustomInput from '../../compenents/CustomInput';
import CustomButton from '../../compenents/CustomButton';
import SocialSignInButtons from '../../compenents/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  // const [username,setUsername] = useState('');
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');
  // const [passwordRepeat,setPasswordRepeat] = useState('');

  const {control, handleSubmit,watch} = useForm();
  const pwd= watch('password');

  const animationRef = useRef()

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    //console.warn('Sign Up Pressed');
    navigation.navigate('ConfirmEmail');
  }

  const onSignInPressed = () => {
    //console.warn('Sign In Pressed');
    navigation.navigate('SignIn');
  }

  const onTermsOfUsePressed = () => {
    console.warn('Terms of Use Pressed');
    //navigation.navigate('TermsOfUse');
  }

  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy Pressed');
    } 


  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
      <Text style = {styles.title}>Create an account</Text>

      <CustomInput
      name = "Phone Number"
      control={control}
       placeholder = "Phone Number" 
       rules = {{
        required: 'Phone Number is required',
        minLength:{
          value: 10,
          message: 'Phone Number should be at least 3 characters long',
        },
        maxLength:{
          value: 24,
          message: 'Phone Number should be at most 24 characters long',
        },
        
        }}
      
       />

       <CustomInput
        name = "email"
        control={control}
       placeholder = "Email" 
       rules={{pattern: {value: EMAIL_REGEX,message: 'Email is invalid'}}}
      //  value = {email} 
      //  setValue={setEmail}
       />

      <CustomInput 
      name = "password"
      control={control}
      placeholder = "Password" 
      // value = {password} 
      // setValue={setPassword}
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
      />

      <CustomInput 
      name = "password-repeat"
      control={control}
      placeholder = "Confirm Password" 
      // value = {passwordRepeat} 
      // setValue={setPasswordRepeat}
        secureTextEntry
        rules = {{
          validate: value => value == pwd || 'Password do not match',
        }}
      />

      <CustomButton 
      text = "Register" 
      onPress={handleSubmit(onRegisterPressed)} 
      />

     <Text style = {styles.text}>
     By registering, you confirm that you accept our {' '}
     <Text style = {styles.link} onPress = {onTermsOfUsePressed}>Terms of Use</Text> {' '}and {' '}
     <Text style = {styles.link} onPress = {onPrivacyPolicyPressed}>Privacy Policy</Text>
     </Text>

    <SocialSignInButtons />

      <CustomButton 
      text = "Already have an account? Sign in" 
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


export default SignUpScreen