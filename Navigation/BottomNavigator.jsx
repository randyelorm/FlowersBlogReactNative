import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Files from '../Screens/BottomScreens/Files'
import Likes from '../Screens/BottomScreens/Likes'
import Profile from '../Screens/BottomScreens/Profile'
import Settinngs from '../Screens/BottomScreens/Settinngs'
import HomeIcon from "react-native-vector-icons/Octicons"
import FolderIcon from "react-native-vector-icons/AntDesign"
import HeartIcon from "react-native-vector-icons/Feather"
import UserIcon from "react-native-vector-icons/AntDesign"
import SettingsIcon from "react-native-vector-icons/Feather"
import SearchIcon from "react-native-vector-icons/AntDesign"
import MoreIcon from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator'

const BottomTab = createBottomTabNavigator()


const BottomNavigator = () => {
    return (
     
       <BottomTab.Navigator 
       tabBarOptions = {{ 
        headerShown: false, 
        showLabel: false,
        showIcon: true,
        activeTintColor: "#FD6592",
     }}  
      
     screenOptions={{ headerShown: false }}
        >


     <BottomTab.Screen 
     name = "Home"
    component = {StackNavigator}

    options= {{

        tabBarIcon: ({color})=>( <HomeIcon name = "home" size = {24} style = {{color: color,}}/>),
        headerTitleStyle: {fontSize: 30, color: "#324558"},
       
       
      
    }}

  
    
      />

           <BottomTab.Screen 
           name = "Files"
           component = {Files} 
       
           options= {{
               tabBarIcon: ({color})=>(<FolderIcon name = "folderopen"  size = {24}   style = {{color: color}}  />)
           }}
           />
           <BottomTab.Screen 
           name = "Likes" 
           component = {Likes} 
           options = {{
               tabBarIcon: ({color})=>(<HeartIcon name = "heart"  size = {24}   style = {{color: color}} />)
           }}
           />


           <BottomTab.Screen 
           name = "Profile" 
           component = {Profile}
           options = {{
               tabBarIcon: ({color})=>(<UserIcon name = "user" size = {24}   style = {{color: color}} />)
           }}
           
           />
           <BottomTab.Screen 
           name = "Settings" 
           component = {Settinngs}
           options={{
               tabBarIcon: ({color})=>(<SettingsIcon name = "settings" size = {24}   style = {{color: color}} />)
           }} 
           />
       </BottomTab.Navigator>
    
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    headerIcons: {
        paddingHorizontal: 15,
        color: "#324558"
    }
})
