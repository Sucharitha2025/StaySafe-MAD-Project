import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image source={require("../../assets/Background.jpg")} style={styles.image}/>
      </View>
    </View>
  );
};

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage: {
        position: 'absolute',
    },

    image: {
        width: 450,
        height: 835,
        resizeMode: 'cover',
    },

});