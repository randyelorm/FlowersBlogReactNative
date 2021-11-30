import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import BottomNavigator from '../../Navigation/BottomNavigator'
import DotIcon from "react-native-vector-icons/Entypo"




const Home = ({navigation}) => {

    const info = [
        {
          
            BackgroundColor: "#FEDCE7",
            TopicImage: require("../../assets/1.jpeg"),
            title: "Is Love as it's known an action or a feeling?",
            writerName: "Randy Davoh",
            writerImage: require("../../assets/W1.jpg"),
            timeStamp: "4 min read",
        },
        {
          
            BackgroundColor: "#F9E0E3",
            TopicImage: require("../../assets/2.jpeg"),
            title: "The history of flowers as a sign of affection.",
            writerName: "Rita Herman",
            writerImage: require("../../assets/W2.jpg"),
            timeStamp: "4 min read",
        },
        {
          
            BackgroundColor: "#E9ECDA",
            TopicImage: require("../../assets/3.jpeg"),
            title: "Garnishing your salad dressing the right way.",
            writerName: "Brand John",
            writerImage: require("../../assets/W3.jpeg"),
            timeStamp: "4 min read",
        },
        {
          
            BackgroundColor: "#EFEAE4",
            TopicImage: require("../../assets/4.jpeg"),
            title: "Why wine may be your best medicine.. ever!",
            writerName: "Mia Jones  ",
            writerImage: require("../../assets/W4.jpeg"),
            timeStamp: "4 min read",
        },
    ]


    return (
        <View>
            <FlatList
            data = {info}
            keyExtractor= {
                (item,index)=>
                 {return index}
            }

            renderItem = {
                ({item})=> (
                    <View style = {styles.container}>
                            <TouchableOpacity style = {styles.flatlistItems} onPress = {()=>(navigation.navigate("Details", {details: item}))}>
                               <View style = {{backgroundColor: item.BackgroundColor, height: 80, width:80}}></View>
                               <View style = {styles.PostsCard}>
                                    <View style = {styles.ImageTextView}>
                                            <View style = {styles.TopicImageView}>
                                                <Image source = {item.TopicImage} style= {styles.topicImage}/>
                                            </View>
                                            <View style = {styles.TitleWriterImageTimeView}>
                                               <Text style = {styles.topicTitle}>{item.title}</Text> 
                                               
                                                    <View style = {styles.writerImageNameTimeView}>
                                                        <View style = {styles.writerImageNameView}>
                                                            <Image source = {item.writerImage} style = {styles.writerImage}/>
                                                            <Text style = {styles.writerName}>{item.writerName}</Text>
                                                        </View>
                                                       
                                                        <Text style = {styles.timeStamp}> <DotIcon style = {styles.dot} name = "dot-single"/> {item.timeStamp}</Text>
                                                    </View>
                                            </View>
                                    </View>

                               </View>
                            </TouchableOpacity>
                    </View>
                )
            }
            />

      
      
        </View>
    )
       
    
}

export default Home

const styles = StyleSheet.create({

    container: {
        margin: 15,
       height: 140,
       backgroundColor: "white",
       flex: 1,
    
    
    },

    PostsCard: {
        position: "absolute",
        backgroundColor: "white",
        marginLeft: 10,
        marginTop: 10,
       flex: 1,
    },
    
    

    ImageTextView: {
        flexDirection: "row",
        justifyContent: "space-between",

   
      
    },

 

    TitleWriterImageTimeView: {
   
        justifyContent: "space-between" ,
        height: 110,
        width: 200,
        marginLeft: 10
      
   
   
    
 
    },
    writerImageNameTimeView: {
       flexDirection: "row" ,
       alignItems: "center",
   
    },

    writerImageNameView: {
        flexDirection: "row" ,
        alignItems: "center",
        
    
     },

    topicTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#324558",
        fontFamily: "Tinos_700Bold"
     
    },

    topicImage: {
        height: 110,
        width: 90,
        marginLeft: 7,
        marginTop: 7,
 
  
    },

    writerImage: {
        height: 30,
        width: 30,
        marginRight: 5,
        borderRadius: 50
      
    },

    writerName : {
        marginRight: 10,
        color: "#324558",
        fontFamily: "Tinos_400Regular",
    },

    timeStamp: {
        color: "#98A2AB",
        fontFamily: "Tinos_400Regular",
    },

    dot: {
        fontSize: 15,
   
      
    }

  

    
})
