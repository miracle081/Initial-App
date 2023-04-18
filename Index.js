import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";


export function Index() {
    const [state, setstate] = useState(80)
    const [userName, setUsername] = useState("")


    useEffect(() => {
        setstate(900)
        setUsername("john")
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.header}>My composition</Text>
            <Text>
                Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.
            </Text>
            <View style={styles.innserContainer}>
                <Image source={require("./assets/nature.jpg")} style={styles.bodyImage} />
                {/* =========== Background Image ============= */}
                <ImageBackground source={require("./assets/nature.jpg")} style={styles.bodyImage}>
                    <Text style={styles.bgText}>This is a Background Image</Text>
                </ImageBackground>
            </View>

            <View>
                <View style={styles.lines}>
                    <Image style={styles.lineImg} source={require("./assets/java.png")} />
                    <Text style={styles.lineText}>{userName} {state}</Text>
                </View>
                <View style={[styles.lines, { backgroundColor: '#06fc16ff' }]}>
                    <Image style={styles.lineImg} source={require("./assets/java.png")} />
                    <Text style={styles.lineText}>Java</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#0616fc1d',
        padding: 10,
    },
    header: {
        color: "green",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    bodyImage: {
        width: "100%",
        height: 200,
        marginTop: 10,
        borderRadius: 10
    },
    bgText: {
        flex: 1,
        backgroundColor: "#000000ac",
        color: "white",
        padding: 10.
    },
    lines: {
        backgroundColor: '#ff9d00a9',
        padding: 20
    },
    lineImg: {
        width: 40,
        height: 40
    }
})