 import { View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native'
 import MapView, { Animated, Callout, Marker } from 'react-native-maps';
 import React, { useRef, useState } from 'react'
 import user from '../../data/user';
 import { Image } from 'react-native';
 import {GOOGLE_API_Key} from '@env' //Google Api key in .env file

 const { width, height } = Dimensions.get("window");
 const ASPECT_RATIO = width / height;
 const LATITUDE_DELTA = 0.02;
 const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
 const INITIAL_LAT = 51.594;
 const INITIAL_LNG = -0.163937;
 const INITIAL_POSITION = {
   latitude: INITIAL_LAT,
   longitude: INITIAL_LNG,
   latitudeDelta: LATITUDE_DELTA,
   longitudeDelta: LONGITUDE_DELTA,
 };

 const Users = user.filter(
  u => 
    u.UserLatitude !== 0 && u.UserLongitude !== 0 && !u.UserFirstname.toLowerCase().includes('users')
 );

 const HomeScreen = () => {
   const [searchText, setSearchText] = useState('');
   const [results, setResults] = useState([]);
   const map = useRef(null);

   const searchPlaces = async () => {
     if (!searchText.trim().length) return;

     const googleApiURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

     const input = searchText.trim()
     const location = `${INITIAL_LAT}, ${INITIAL_LNG}&radius=2000`
     const url = `${googleApiURL}?query=${input}&location=${location}&key=${GOOGLE_API_Key}`

     try {
       const resp = await fetch(url)
       const json = await resp.json()

       //console.log(json);
       if (json && json.results) {
        const coords = json.results.map((item) => ({
          latitude: item.geometry.location.lat,
          longitude: item.geometry.location.lng,
        }))
        setResults(json.results);
        if (coords.length) {
          map.current?.fitToCoordinates(coords, {
            edgePadding: {
              top: 50,
              right: 50,
              bottom: 50,
              left: 50,
            },
            animated: true
          });
          Keyboard.dismiss();
        }
       }
     } catch (e) {
       console.error('Search Error:', e);
     }
   };

   return(
     <View style={styles.container}>
       <MapView ref={map} style={styles.map} initialRegion={INITIAL_POSITION}>
        
        {results.map((item, i) => {
          //search result marker
          const coord = {
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          };
          return (
          <Marker key={`search-item-${i}`} coordinate={coord} pinColor='red' title={item.name} description=''
          /> 
        );
        })} 

        {Users.map((users, index) => (
          <Marker
            key={`user-marker-${users.UserID}-${index}`}
            pinColor='blue' //user marker colour to blue
            coordinate={{
              latitude: users.UserLatitude,
              longitude: users.UserLongitude,
          }}
          >
            <Callout tooltip>
              <View style={styles.buttons}>
                <Image 
                  source={{ uri : users.UserImageURL}}
                  style={styles.images}
                />
                <Text style={styles.names}>{users.UserFirstname} {users.UserLastname}</Text>
                <Text style={styles.usernames}>@{users.UserUsername}</Text>
                <Text style={styles.phones}>{users.UserPhone}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
       </MapView>
       
       <View style={styles.searchBox}>
        <Text style={styles.searchBoxLabel}/>
        <TextInput 
        style={styles.searchBoxField}
        onChangeText={setSearchText}
        value={searchText}
        autoCapitalize='sentences' 
        placeholder='Search places, parks, shops...'
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={searchPlaces}>
          <Text style={styles.buttonLabel}>Search</Text>
        </TouchableOpacity>


       </View>
     </View>
   );
 }

 export default HomeScreen;

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   map: {
     width: '100%',
     height: '100%',
   },
   searchBox: {
     //borderRadius: 8,
     //borderWidth: 1,
     //borderColor: "#aaa",
     position: 'absolute',
     top: 55,
     alignSelf: 'center',
     width: '90%',
     padding: 10,
     backgroundColor: 'white',
     borderRadius: 25,
     //shadowColor: '#000',
     shadowOffset: { width: 0, height: 4 },
     shadowOpacity: 0.25,
     shadowRadius: 6,
     elevation: 8,
     zIndex: 10,
    },

   searchBoxField: {
     borderColor: "#777", //gray
     borderWidth: 1,
     borderRadius: 3,
     paddingHorizontal: 8,
     paddingVertical: 17,
     fontSize: 18,
     marginBottom: 10,
     backgroundColor: "white",
     flex: 1,
     fontSize: 16,
     color: '#333',
   },

   buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 17,
    borderRadius: 20,
    elevation: 4,
    padding: 7,
   },

   buttonContainer: { 
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#26f', 
     //backgroundColor: 'black',
     paddingVertical: 14,
     borderRadius: 30,
     elevation: 4,
     shadowColor: '#007bff',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.3,
     shadowRadius: 3,
     //padding: 2,
    },

   buttonLabel: {
     fontSize: 16,
     color: 'white',
     fontWeight: '600',
   },

  calloutContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 200,
    alignItems: 'center',
    shadowColor: '#000', //black
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },

  images: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },

  usernames: {
    color: '#555',
    fontSize: 14,
  },

  phones: {
    color: '#888',
    fontSize: 13,
    marginTop: 4,
  },

 });
