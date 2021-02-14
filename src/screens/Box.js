import React from 'react'
import {View, StyleSheet, Text} from "react-native"

function BoxScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1} >Box Demo 1</Text>
            <Text style={styles.textStyle2} >Box Demo 2</Text>
            <Text style={styles.textStyle3} >Box Demo 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        display:"flex",
        flexDirection:"row",
        height:200,
        alignContent:"flex-start",
        justifyContent:"space-between",

        borderWidth:1,
        borderColor:'black',

    },
    textStyle1:{
        borderWidth:1,
        borderColor:'red',
        margin:20,
        alignSelf:"flex-start"
    },
    textStyle2:{
        borderWidth:1,
        borderColor:'green',
        margin:20,
        alignSelf:"flex-end",
        

    },
    textStyle3:{
        borderWidth:1,
        borderColor:'pink',
        margin:20,
        alignSelf:"flex-start"

    }
})
export default BoxScreen
