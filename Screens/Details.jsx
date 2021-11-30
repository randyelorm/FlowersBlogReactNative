import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import DotIcon from "react-native-vector-icons/Entypo"
import HeartIcon from "react-native-vector-icons/Feather"
import ShareIcon from "react-native-vector-icons/AntDesign"
import HeadPhonesIcon from "react-native-vector-icons/SimpleLineIcons"
import BackIcon from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/core';

export default function Details(props) {

const {TopicImage, title, writerName, writerImage, timeStamp, BackgroundColor } = props.route.params.details
 
const navigation = useNavigation()
const goBack = ()=> {
    navigation.goBack()
}
  
    return (
        <>
   
             
     
        <ScrollView style = {styles.container}>
                <SafeAreaView style = {styles.customHeader}>
                
                    

                   <View style = {styles.headerIconsView}>
                        <HeadPhonesIcon name = "earphones" style = {styles.headerIcons}   size = {24}/>
                        <HeartIcon name = "heart"  size = {24}  style = {styles.headerIcons}  />
                        <ShareIcon name = "sharealt" style = {styles.headerIcons}   size = {24}/>
                    </View>
               
                </SafeAreaView>

                <View style = {{width: 210, height: 250,position: "absolute", backgroundColor: BackgroundColor,}}>    
                </View>

            <TouchableOpacity onPress ={goBack} style = {styles.backOpacity} >
                <BackIcon size ={25} style = {styles.backIcon} name = "arrow-back-ios"/>
                <Text style = {styles.todiscoveryText} > To Discover </Text>
            </TouchableOpacity>

                   
    

             <View>
                <Image style = {styles.TopicImage} source={TopicImage} />
            </View>

            <View>
             <Text style = {styles.title}>{title}</Text>
            </View>

            <View style = {styles.proImageNamestampView}>
                        <Image style = {styles.writerImg} source = {writerImage}/>
                        <Text style = {styles.writername}>{writerName}</Text>
                        <Text style = {styles.timestamp}> <DotIcon style = {styles.dot} name = "dot-single"/> {timeStamp}</Text>
            </View>

            <View>
                      <Text style = {styles.info}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Dolor blanditiis quasi iusto iste quos architecto, qui
                          
                            </Text>

                            <Text style = {styles.info}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                          </Text>

                              
                            <Text style = {styles.info}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Dolor blanditiis quasi iusto iste quos architecto, qui, n
                           obis, nulla commodi ipsa aut libero ullam fuga. Voluptatum
                            dolores omnis inventore distinctio adipisci!</Text>
            </View>
        </ScrollView>
  
        </>
    )
}

const styles = StyleSheet.create({

    container: {
       backgroundColor: "white",

       
       zIndex: 999,
       elevation:3,
  
       
     
    
    },

    customHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 0    // touchableOpacity button was not sending us back to home. this solved the problem
    },

 

  
    todiscoveryText: {
        top: 80,
        left: 30,
        fontSize: 20,
        fontWeight: "bold",
        color: "#324558",
        fontFamily: "Tinos_700Bold"
      
    },

    headerIconsView: {
        flexDirection: "row",
        position: "absolute",
        top: 80,
        left: 220
    },

    backIcon: {
        position: "absolute",
        top: 80,
        left: 15,
        color: "#505D6D"
    
        
        
        },
        
        goBack: {
          zIndex: 9999999,
          fontSize: 20,
          marginTop: 185,
          marginLeft: 10
        
        
        
        },
      
        backOpacity: {
            zIndex: 1,
            position: "absolute"
        },




    headerIcons: {
        paddingHorizontal: 15,
        color: "#324558",
    },
    

  
    TopicImage: {
        width: 350,
        height: 300,
        marginTop: 100,
        alignSelf: "center",
        borderWidth: 10,
        borderColor: "white",
        zIndex: 3
 
     
    
       
      
    },

    title: {
        
        fontSize: 20,
        paddingHorizontal: 25,
        paddingVertical: 10,
        color: "#324558",
        fontFamily: "Tinos_700Bold"
    },

    writerImg: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10
    },

    proImageNamestampView: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 25,
       
    },

    writername: {
        color: "#5B6A79"
    },

    timestamp: {
        color: "#9CA5AE"
    },

    dot: {
        fontSize: 15,
   
      
    },
    info: {
        marginVertical: 20,
        fontSize: 16,
        paddingHorizontal: 25,
        color: "#5B6A79",
        fontFamily: "Tinos_400Regular",
    }

})
