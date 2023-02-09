import { View, Text, Dimensions } from 'react-native'
import React from 'react'

import HomeMap from '../../compenents/HomeMap'
import CovidMessage from '../../compenents/CovidMessage'
import HomeSearch from '../../compenents/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
    <View style={{height: Dimensions.get('window').height - 400}}> 
      <HomeMap/>

      </View>

      {/* Covid message*/}
      <CovidMessage/>

      {/* Bootom comp*/}
      <HomeSearch/>

    </View>
  )
}

export default HomeScreen