import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'

const Profile = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.pageHeading}>Profile Page</Text>
            <View>
                <Image style = {styles.gif} source = {require("../../assets/profile.gif")}/>
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center"
    },

    pageHeading: {
        fontSize: 25,
        fontWeight: "bold"
    },

    gif: {
        width: 400,
        height: 400
    }
})
