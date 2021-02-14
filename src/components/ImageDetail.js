import React from 'react'
import {StyleSheet, View, Text, Image} from "react-native";

const styles = StyleSheet.create({

})
export default function ImageDetail({title, imgSrc, imgDetail, score}) {
    return (
        <View>
            <Image source={imgSrc} />
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
            <Text>{imgDetail}</Text>
        </View>
    )
}


