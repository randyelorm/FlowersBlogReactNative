import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NativeScreenContainer } from 'react-native-screens';
import BottomNavigator from './Navigation/BottomNavigator';
import RootNavigator from './Navigation/StackNavigator';
import {setCustomText} from "react-native-global-props"
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator';

import AppLoading from 'expo-app-loading';

import { 
  useFonts,
  Tinos_400Regular,
  Tinos_400Regular_Italic,
  Tinos_700Bold,
  Tinos_700Bold_Italic 
} from '@expo-google-fonts/tinos'


export default function App() {

  let [fontsLoaded, error] = useFonts({
    Tinos_400Regular,  Tinos_700Bold,
  })

if (!fontsLoaded) {
  return <AppLoading/>
} else {

  return (
  <NavigationContainer>
     <BottomNavigator />
  </NavigationContainer>
  
  )

  
}
}





