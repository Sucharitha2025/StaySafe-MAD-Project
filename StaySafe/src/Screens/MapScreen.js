import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const API_Key = 'AIzaSyCy2gn46_DIDvjcYQmnsN9Qd8hItoIMo0M'

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
    </View>
  )
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})