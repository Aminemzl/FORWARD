import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importe le conteneur de navigation
import { createStackNavigator } from '@react-navigation/stack'; // Importe le créateur de stack de navigation
import HomeScreen from './screens/HomeScreen'; // Importe l'écran d'accueil
import ProjectScreen from './screens/ProjectScreen'; // Importe l'écran de projet

const Stack = createStackNavigator(); // Crée une instance de stack de navigation

export default function App() {
  return (
    <NavigationContainer>
      {/* Le conteneur de navigation enveloppe toute l'application */}
      <Stack.Navigator initialRouteName="Home">
        {/* Déclare le navigator de stack et l'écran initial */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project" component={ProjectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
