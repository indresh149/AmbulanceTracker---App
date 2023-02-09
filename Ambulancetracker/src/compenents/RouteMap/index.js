import { View, Text, Image ,FlatList} from 'react-native'
import React from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBd11eKITZTuEunJRtfNVtkKjyC2VXyIcg';

const RouteMap = () => {

    const origin = {
        latitude: 28.450627, 
        longitude: -16.263045,
    };
    const destination = {
        latitude: 28.460127,
         longitude: -16.269045,
        };
    

  return (
   
    <MapView
    style={{height:'100%',width:'100%'}}
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps

    initialregion={{
      latitude: 28.450627,
      longitude: -16.263045,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}
  >
  <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={5}
    strokeColor="black"
  />
  <Marker
    
    coordinate={origin}
    title={'Origin'}
    /> 
    <Marker
    coordinate={destination}
    title={'Destination'}
    />
  
</MapView>
);
};

export default RouteMap;