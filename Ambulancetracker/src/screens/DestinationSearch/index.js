import { View, Text ,TextInput,SafeAreaView} from 'react-native'
import React,{useEffect, useState} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import styles from './styles'
const DestinationSearch = () => {

    // const [fromText,setFromText] = useState('');
    // const[destinationText,setDestinationText] = useState('');
    const [originPlace,setOriginPlace] = useState(null);
    const [destinationPlace,setDestinationPlace] = useState(null);

    useEffect(() => {
        if(originPlace && destinationPlace){
            console.warn('Redirect to results');
        }

    },[originPlace,destinationPlace])

  return (
    <SafeAreaView>
    <View style={styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Where From?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setOriginPlace({data,details});
        //console.log(data, details);
      }}
      styles={{
        textInput: styles.textInput,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyBd11eKITZTuEunJRtfNVtkKjyC2VXyIcg',
        language: 'en',
      }}
    />

     <GooglePlacesAutocomplete
      placeholder='Where to?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setDestinationPlace({data,details});
        //console.log(data, details);
      }}
      styles={{
        textInput: styles.textInput,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyBd11eKITZTuEunJRtfNVtkKjyC2VXyIcg',
        language: 'en',
      }}
    />

    </View>
    </SafeAreaView>
  )
}

export default DestinationSearch