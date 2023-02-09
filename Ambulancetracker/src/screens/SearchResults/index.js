import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import HomeMap from '../../compenents/HomeMap';
import AmbuTypes from '../../compenents/AmbuTypes';


const SearchResults = () => {
  return (
    <View style={{display:'flex',justifyContent:'space-between'}}>
    <View style={{height:Dimensions.get('window').height - 400}}>
      <HomeMap/> 
    </View>

    <View style={{height:400,backgroundColor:'red'}}>

        <AmbuTypes/>
        </View>

    </View>
  )
}

export default SearchResults;