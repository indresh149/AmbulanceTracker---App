import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../compenents/CustomInput';
import CustomButton from '../../compenents/CustomButton';
import SocialSignInButtons from '../../compenents/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'


const ConfirmEmailScreen = () => {
  
  //const [username,setUsername] = useState('');
  const {control,handleSubmit} = useForm();
  const navigation = useNavigation();
  

  const onSendPressed = (data) => {
    console.warn(data);
    //console.warn('onSend Pressed');
    navigation.navigate('NewPassword');
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
      name = "username"
       placeholder = "Username" 
        control = {control}
       rules={{
        required: 'Username is required',
       }}
      //  value = {username} 
      //  setValue={setUsername}
       />

      <CustomButton 
      text = "Send" 
      onPress={handleSubmit(onSendPressed)} 
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


export default ConfirmEmailScreen