import { View, Text ,Pressable} from 'react-native'
import React from 'react'
import styles from './styles'
import AmbuTypeRow from '../AmbuTypeRow'

import typesData from '../../../assets/data/types'


const AmbuTypes = () => {
  const confirm= () => {
    console.warn('confirm')
  }
  return (
    <View>
      {typesData.map(type  => 
        <AmbuTypeRow type={type} key={type.id}/>
        )}
        <Pressable onPress={confirm} style={{
          backgroundColor:'black',
          padding:10,
          margin:10,
          alignItems:'center',
        }}>

        <Text style={{color:'white',fontWeight:'bold'}}>  
        Confirm Ambulance
        </Text>
        </Pressable>
      
    </View>
  )
}

export default AmbuTypes