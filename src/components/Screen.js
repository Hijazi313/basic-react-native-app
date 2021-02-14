import React from "react";
import { Text,StyleSheet, View } from "react-native";

const Screen = ()=>{
    const name = "Hamza"
    return (<View>
                <Text style={styles.text1}>Getting Started With React Native</Text>
                <Text style={styles.text2}>My name is {name}</Text>
        </View>)}

const styles = StyleSheet.create({
    text1:{
        fontSize:45,
        color:"red",
    },
    text2:{
        fontSize:20
    }
})
export default Screen;