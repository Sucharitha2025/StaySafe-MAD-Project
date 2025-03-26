import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContactListScreen from "./src/Component/screens/ContactListScreen";
import ContactAddScreen from "./src/Component/screens/ContactAddScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ContactListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="ContactListScreen"
          component={ContactListScreen}
          options={{ title: "Contact List" }}
        />
        <Stack.Screen
          name="ContactAddScreen"
          component={ContactAddScreen}
          options={{ title: "Contact Add" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Alert } from 'react-native';
// import Button from './src/UI/Button';
// import { Audio } from 'expo-av';  

// export const App = () => {
//   const [sound, setSound] = React.useState();

//   const playSound = async () => {
//     const { sound } = await Audio.Sound.createAsync(
//       require('./assets/sos.mp3') 
//     );
//     setSound(sound);
//     await sound.playAsync();  
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         *Warning this button will send an alert to emergency contacts
//       </Text>
//       <StatusBar style="auto" />
//       <Button 
//         label="SOS" 
//         onPress={() => {
//           playSound();  
//           Alert.alert('Warning Button Pressed: Emergency notification sent');
//         }} 
//         color="red" 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 20,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     marginTop: 20,
//     color: 'white',
//     fontSize: 20,
//     textAlign: 'center',
//   },
// });

