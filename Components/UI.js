import { StyleSheet, View, Text as P } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export function UI() {
    const [boolean, setBoolean] = useState(false)
    return (
        <View style={styles.container}>
            <Text variant='displaySmall' >React native paper</Text>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button icon={"home"}>Cancel</Button>
                    <Button loading={boolean} onPress={()=> setBoolean(true)}>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})