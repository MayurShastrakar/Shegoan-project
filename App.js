import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from './pages/login';
import home from './pages/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
            screenOptions={{
              headerShown: true, // Show the header
              headerTransparent: true, // Make the header transparent
              headerTintColor: "#000", // Color of header elements
              headerTitle: "AiSense", // Hide the title
              headerTitleStyle: {
                fontSize: 25, // Customize the font size if needed
                fontWeight: "600", // Customize the font weight if needed
              },
              headerTitleAlign: "center",
              // headerLeft: () => <CustomMenuIcon />, // Custom menu icon
            }}
          >
            <Stack.Screen
              name="login"
              component={login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="home"
              component={home}
              options={{
                headerShown: false,
              }}
            />
            </Stack.Navigator>
    </NavigationContainer>
   
  );
}


