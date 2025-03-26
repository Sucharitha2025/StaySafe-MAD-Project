import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';


const Google_API_Key = 'AIzaSyB9k3Oi6n97QNP2FmvdAzgR7Wr0SnZM4ms';

//setting up initial posisiton for the map
const { width, height } = Dimensions.get("window"); //screen width and height 
//setting up to zoom 
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 40.767110,
  longitude: -73.979704,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

function InputAutocomplete({label, placeholder, onPlaceSelected}){
  return (
    <>
    {label && <Text style={styles.label}>{label}</Text>}

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
  
  //State
  //const [isMapReady, setIsMapReady] = useState(false);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showDestination, setShowDestination] = useState(false);
  const mapRef = useRef(null);

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, {duration: 1000});
    }
  };

  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details.geometry.location.lat || 0,
      longitude: details.geometry.location.lng || 0,
    };
    set(position)
    moveTo(position);
  };

  return (
    <View style={styles.container}>

      <MapView
      ref={mapRef} 
      style={styles.map} 
      initialRegion={INITIAL_POSITION} 
      >

        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}

        {showDestination && origin && destination && (
          <MapViewDirections 
          origin={origin} 
          destination={destination} 
          apikey = {Google_API_Key}
          />
        )} 

      </MapView>

      <View style={styles.searchContainer}>
       <InputAutocomplete placeholder= 'Starting point' onPlaceSelected={(details) => onPlaceSelected(details, "origin")} />
       <InputAutocomplete placeholder= 'Destination' onPlaceSelected={(details) => onPlaceSelected(details, "destination")} />

       <TouchableOpacity style={styles.buttons} onPress={() => setShowDestination(true)}>
        <Text style={styles.buttonsText}>Search </Text>
       </TouchableOpacity>

      </View>

    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  searchContainer: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 60,
  },

  input: {
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 7,
    marginTop: 7,
  },

  buttons: {
    backgroundColor: '#26f', //blue 
    paddingVertical: 12,
    marginTop: 7,
    borderRadius: 4,
    borderRadius: 30,
  },

  buttonsText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },

});
