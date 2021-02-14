import React,{useState} from "react";
import {Button, View, FlatList} from "react-native";

const ColorScreen = ()=>{
    const [colors, setcolors] = useState([])
    return(
        <View>
            <Button title="Add Color" onPress={()=> setcolors([...colors, randomRgb()]) } />
            <FlatList 
                data={colors}
                keyExtractor={(item)=> item}
                renderItem={({item,}) => <View style={{height:100, width:100, backgroundColor: item}} /> }
            />
            
        </View>
    )
}

const randomRgb = ()=>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

export default ColorScreen;