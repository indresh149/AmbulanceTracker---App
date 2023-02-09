import { View, Text } from 'react-native'
import React from 'react'

import HomeMap from '../../compenents/HomeMap'
import CovidMessage from '../../compenents/CovidMessage'
import HomeSearch from '../../compenents/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
      <HomeMap/>

      {/* Covid message*/}
      <CovidMessage/>

      {/* Bootom comp*/}
      <HomeSearch/>

    </View>
  )
}

export default HomeScreen