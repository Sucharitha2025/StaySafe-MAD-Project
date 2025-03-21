import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './src/Screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Maps" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;