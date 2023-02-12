import { View, Text ,TextInput,SafeAreaView} from 'react-native'
import React,{useEffect, useState} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import PlaceRow from "./PlaceRow";

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = () => {

    // const [fromText,setFromText] = useState('');
    // const[destinationText,setDestinationText] = useState('');
    const [originPlace,setOriginPlace] = useState(null);
    const [destinationPlace,setDestinationPlace] = useState(null);

    const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

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
      enablePoweredByContainer={false}
      suppressDefaultStyles
      currentLocation={true}
      currentLocationLabel='Current location'
      styles={{
        textInput: styles.textInput,
        container: styles.autocompleteContainer,
        listView: styles.listView,
        separator: styles.separator,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyBd11eKITZTuEunJRtfNVtkKjyC2VXyIcg',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}
      renderDescription={(data) => data.description || data.vicinity}
      predefinedPlaces={[homePlace, workPlace]}
    />

     <GooglePlacesAutocomplete
      placeholder='Where to?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setDestinationPlace({data,details});
        //console.log(data, details);
      }}
      suppressDefaultStyles
      enablePoweredByContainer={false}
      styles={{
        textInput: styles.textInput,
        container: {
          ...styles.autocompleteContainer,
          top: 55,
        },
        separator: styles.separator,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyBd11eKITZTuEunJRtfNVtkKjyC2VXyIcg',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}
    />
     {/* Circle near Origin input */}
     <View style={styles.circle} />

     {/* Line between dots */}
     <View style={styles.line} />

     {/* Square near Destination input */}
     <View style={styles.square} />


    </View>
    </SafeAreaView>
  )
}

export default DestinationSearch