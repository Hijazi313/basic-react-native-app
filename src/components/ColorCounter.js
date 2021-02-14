import React,{useState} from "react";
import {Button, View, FlatList, Text} from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease})=>{
    const [colors, setcolors] = useState([])
    return(
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={()=> onIncrease()}  />
            <Button title={`Decrease ${color}`}  onPress={()=> onDecrease()} />
        </View>
    )
}

const randomRgb = ()=>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

export default ColorCounter;