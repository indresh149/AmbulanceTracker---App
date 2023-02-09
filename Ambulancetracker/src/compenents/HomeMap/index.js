import { View, Text } from 'react-native'
import React from 'react'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const HomeMap = () => {
  return (
    <View style={{
        height:300,
        backgroundColor:"#a0abff",
        justifyContent:"center",
        alignItems:"center",
    }}>
    <MapView
    style={{height:'100%',width:'100%'}}
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps

    initialregion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}
  >
  </MapView>
    </View>
  )
}

export default HomeMap;