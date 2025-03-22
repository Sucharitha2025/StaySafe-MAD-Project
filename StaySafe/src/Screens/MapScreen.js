import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//import uuid from 'react-native-uuid';
import 'react-native-get-random-values';

const Google_API_Key = 'AIzaSyCy2gn46_DIDvjcYQmnsN9Qd8hItoIMo0M'

//const id = uuid.v4();

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 40.767110,
  longitude: -73.979704,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

// const InputAutocompleteProps = {
//   label,
//   placeholder,
//   onPlaceSelected
// }

function InputAutocomplete({label, placeholder, onPlaceSelected}){
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: Google_API_Key,
          language: "pt-BR",
        }}
      />
    </>
  );
};

const MapScreen = () => {

  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")


  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination
    const position = {
      latitude: details.geometry.location.lat || 0,
      longitude: details.geometry.location.lng || 0,
    }
    set(position)
  };


  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={INITIAL_POSITION}/>
      
      <View style={styles.searchContainer}>
        <InputAutocomplete label="From" onPlaceSelected={() => {}}/>
        <InputAutocomplete label="To" onPlaceSelected={() => {}}/>
      </View>

    </View>
  )
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    width: '100%',
    height: '100%',
    //width: Dimensions.get("window").width,
    //height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 60,
  },

  input: {
    borderColor: "#888",
    borderWidth: 1,
  },

});