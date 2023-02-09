import { View, Text } from 'react-native'
import React from 'react'
import HomeMap from '../../compenents/HomeMap';
import AmbuTypes from '../../compenents/AmbuTypes';



const SearchResults = () => {
  return (
    <View>
      <HomeMap/> 

        <AmbuTypes/>

    </View>
  )
}

export default SearchResults;