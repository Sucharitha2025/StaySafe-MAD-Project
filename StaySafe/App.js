import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './src/Screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/Screens/ProfileScreen';
import HomeScreen from './src/Screens/HomeScreen';
//import ContactListScreen from './src/Screens/ContactListScreen';
//import ContactScreen from './src/Screens/ContactScreen';
import { navigationRef } from './src/Navigation/navigationRef';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Map") {
            return (
              <MaterialCommunityIcons
                name="map-marker-radius-outline"
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Contact") {
            return (
              <MaterialCommunityIcons
                name="contacts-outline"
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Home") {
            return <Feather name="home" size={size} color={color} />;
          }

          return <Ionicons name="person-outline" size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
    
  )
}

export default App;