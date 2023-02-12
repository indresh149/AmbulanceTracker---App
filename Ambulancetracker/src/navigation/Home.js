import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";

const Stack = createNativeStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;