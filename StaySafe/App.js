import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth ,AuthContextProvider,AuthContext} from "./src/Context/authContext";
import { navigationRef, isNavigationReady } from "./src/Navigation/navigationRef";

import SignIn from "./src/Screens/SignIn";
import SignUp from "./src/Screens/SignUp";
import MapScreen from "./src/Screens/MapScreen"; // Ensure this is imported
import  { useRef,useEffect } from "react";
const Stack = createNativeStackNavigator();




const App = () => {
  const { isAuthenticated } = useAuth(); 

  useEffect(() => {
    if (navigationRef.current) {
      isNavigationReady(true);
    }
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="MapScreen" component={MapScreen} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Root() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}