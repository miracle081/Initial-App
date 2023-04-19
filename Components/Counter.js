import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, } from "react-native";

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Counter</Text>
            <Text style={styles.count}>{count}</Text>
            <View style={{ margin: 10 }}> 
                <Button title="Count +" color="green" onPress={() => { setCount(count + 1) }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title="Count -" color="gray" onPress={() => { setCount(count - 1) }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title="Reset" color="orangered" onPress={() => { setCount(0) }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 10,
    },
    header: {
        color: "green",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    count: {
        fontSize: 50,
        fontWeight: "bold",
        backgroundColor: "#00000028",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    }
})