import { View, Text ,StatusBar} from 'react-native'
import React,{useEffect,useRef} from 'react'
import Lottie from 'lottie-react-native'

import {useNavigation} from '@react-navigation/native'

const SplashScreen = () => {
    const animationRef = useRef()

    const navigation = useNavigation();

  return (
    <View style = {{flex:1}}>
    <StatusBar
    barStyle={'light-content'}
    backgroundColor = {'#000'}
    />
    <Lottie
     ref = {animationRef}
        //style = {{flex:1}}
        source = {require('../../../assets/animation/83028-ambulance.json')}
        loop = {false}
        autoPlay = {true}
        //speed = {0.5}
        onAnimationFinish = {()=> {navigation.navigate('SearchResults')}}
    />
    </View>
  )
}

export default SplashScreen