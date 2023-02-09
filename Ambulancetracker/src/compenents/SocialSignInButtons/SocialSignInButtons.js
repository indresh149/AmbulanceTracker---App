import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
import GoogleSVG from '../../../assets/images/google.svg'
import FacebookSVG from '../../../assets/images/facebook.svg'
import { Image } from 'react-native/Libraries/Image/Image'
import Entypo from 'react-native-vector-icons/Entypo'

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn('Sign In with Facebook');
      };
    
      const onSignInGoogle = () => {
        console.warn('Sign In with Google');
      };
    
      const onSignInApple = () => {
        console.warn('Sign In with Apple');
      };

  return (
    <>
    <CustomButton 
    text = "Sign In with Facebook"
    //<AntDesign name = "clockcircle" size = {16} color = "#535353"/>
    onPress={onSignInFacebook} 
    bgColor="#E7EAF4"
    fgColor="#4765A9"
    />
    <CustomButton 
    text = "Sign In with Google" 
    onPress={onSignInGoogle} 
    bgColor="#FAE9EA"
    fgColor="#DD4D44"
    />
    <CustomButton 
    text = "Sign In with Apple" 
    onPress={onSignInApple} 
    bgColor="#e3e3e3"
    fgColor="#363636"
    />
    </>
  )
}


export default SocialSignInButtons