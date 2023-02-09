import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import RouteMap from '../../compenents/RouteMap';
import AmbuTypes from '../../compenents/AmbuTypes';


const SearchResults = () => {
  return (
    <View style={{display:'flex',justifyContent:'space-between'}}>
    <View style={{height:Dimensions.get('window').height - 400}}>
      <RouteMap/> 
    </View>

    <View style={{height:400}}>

        <AmbuTypes/>
        </View>

    </View>
  )
}

export default SearchResults;