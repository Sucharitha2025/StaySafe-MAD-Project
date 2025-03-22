import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './src/Screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/Screens/ProfileScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ContactScreen from './src/Screens/HomeScreen';
import { navigationRef } from './src/Navigation/navigationRef';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';
//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    // <NavigationContainer>      
    //   <Stack.Navigator>
    //     <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Map') {
              return <MaterialCommunityIcons name="map-marker-radius-outline" size={size} color={color}/>;
            }

            if(route.name === 'Contact'){
              return <MaterialCommunityIcons name="contacts-outline" size={size} color={color}/>;
            }

            if(route.name === 'Home'){
              return <Feather name="home" size={size} color={color}/>;
            }

      

            switch (route.name) {
              case 'Profile': 
                iconName = 'person-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false, 
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;