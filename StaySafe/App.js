import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';

import MapScreen from './src/Component/MapScreens/MapScreen';
import HomeScreen from './src/Component/MapScreens/HomeScreen';
import ActivityScreen from './src/Component/ActivityScreens/ActivityScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactListScreen from './src/Component/ContactScreens/ContactListScreen';
import ContactAddScreen from './src/Component/ContactScreens/ContactAddScreen';
import ContactViewScreen from './src/Component/ContactScreens/ContactViewScreen';
import ContactModifyScreen from './src/Component/ContactScreens/ContactModifyScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator
    initialRouteName='ContactListScreen'
    screenOptions={{
      headerStyle: { backgroundColor: 'black'},
      headerTintColor: 'white',
    }}
    >
      <Stack.Screen 
      name='ContactListScreen'
      component={ContactListScreen}
      options={{ title: 'Contacts' }}
      />

      <Stack.Screen
      name='ContactAddScreen' 
      component={ContactAddScreen}
      options={{ title: 'Add Contacts'}}
      />

      <Stack.Screen 
      name='ContactViewScreen' 
      component={ContactViewScreen}
      options={{ title: 'View Contacts'}}
      />

      <Stack.Screen 
      name='ContactModifyScreen'
      component={ContactModifyScreen}
      options={{ title: 'Modify'}}
      />

    </Stack.Navigator>
  )
}

const App =()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {

          if(route.name === 'Activity'){
            return <Feather name="activity" size={size} color={color}/>;
          }

          if (route.name === "Map") {
            return (
              <MaterialCommunityIcons
                name="map-marker-radius-outline"
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Contacts") {
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
        <Tab.Screen name="Contacts" component={UserStack}/>
        <Tab.Screen name="Activity" component={ActivityScreen}/>
        

      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App