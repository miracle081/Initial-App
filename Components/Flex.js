import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Flex() {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
            </View>
            <View style={styles.box}></View>
            <Text style={[styles.inner, { backgroundColor: "purple" }]}>Container 1</Text>
            <Text style={[styles.inner, { backgroundColor: "orangered" }]}>Container 2</Text>
            <Text style={[styles.inner, { backgroundColor: "purple" }]}>Container 1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        // flexDirection: "row",
        // justifyContent:"space-between",
        // alignItems:"center",
        flex: 1
    },
    inner: {
        backgroundColor: "green",
        flex: 1,
        padding: 5,

    },
    box: {
        backgroundColor: "gray",
        padding: 40,
        margin: 5,
        position: "absolute",
        top: 150,
        right: 200,
        zIndex: 1
    }
})