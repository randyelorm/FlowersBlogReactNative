import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer,  DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import Details from '../Screens/Details'
import BottomNavigator from './BottomNavigator'
import SearchIcon from "react-native-vector-icons/AntDesign"
import MoreIcon from "react-native-vector-icons/Ionicons"
import Home from '../Screens/BottomScreens/Home'

import BackIcon from "react-native-vector-icons/MaterialIcons"
import {useNavigation} from "@react-navigation/native"


const StackNavigator = () => {

  const navigation = useNavigation()

  const goBack = ()=> {
     navigation.goBack()
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white"
    },
  };



    const Stack = createStackNavigator()
    return (

          <Stack.Navigator>
             <Stack.Screen 
             name = "Discover" 
             component = {Home} 
             
             options = {{
              headerLeft: ()=>(<MoreIcon name = "apps" style = {styles.headerIcons}  size = {24}/>),
              headerRight:  ()=>(<SearchIcon name = "search1" style = {styles.headerIcons}   size = {24}/>),
              headerTitleStyle: {fontSize: 30,   color: "#324558",    fontFamily: "Tinos_700Bold"}
             }}
             
             />
             <Stack.Screen 
             name = "Details" 
             
             component = {Details}
        

            options = {{
              headerShown: false
            }}

           

             />
          </Stack.Navigator>

    
    )
}

export default StackNavigator

const styles = StyleSheet.create({


detailsIcon: {
flexDirection: "row",

},

headerIcons: {
  paddingHorizontal: 15,
  color: "#324558",
},









})
