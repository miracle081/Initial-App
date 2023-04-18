import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export function TextInputs() {
    const [number, setNumber] = useState(0);
    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Number'
                    onChangeText={(text) => { setNumber(Number(text)) }}
                />
                <Text>{number} + {number} = {number + number}</Text>
                <TouchableOpacity onPress={() => { setNumber(number + 1) }}>
                    <Text style={{
                        backgroundColor: "gray", padding: 10, textAlign: "center",
                        color: "white", borderRadius: 10
                    }}>Button</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: StatusBar.currentHeight
    },
    input: {
        borderRadius: 10,
        borderColor: "#c300ff",
        borderWidth: 1,
        padding: 8,
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 30
    }
})