import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'

const Files = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.pageHeading}>Files Page</Text>
            <View>
                <Image style = {styles.gif} source = {require("../../assets/filesgif.gif")}/>
            </View>
        </SafeAreaView>
    )
}

export default Files

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
