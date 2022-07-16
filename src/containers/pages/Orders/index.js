import React from "react"
import { Text, View, Button } from "react-native"

const Orders = (props) => {
    return (
        <View>
            <Text>Orders Page</Text>
            <Button title="Doto Detail" onPress={() => props.navigation.navigate('OrderDetail')} />
        </View>
    )
}

export default Orders