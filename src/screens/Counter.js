import React,{useReducer} from "react";
import {View, Text, Button} from "react-native";

const reducer = (state, action)=>{
    switch (action.type) {
        case "INCREASE":
            return {...state, count: state.count+1}
        case "DECREAsE":
            return {...state, count: state.count-1}           
        default:
            state
    }
}
const CounterScreen = ()=>{
    const [state, dispatch] = useReducer(reducer, {count:0});
    return(
        <View>
            <Button onPress={()=>dispatch({type:"INCREASE"})} title="+" />
            <Button onPress={()=>dispatch({type:"DECREAsE"})} title="-" />
            <Text>Current Count : {state.count} </Text>
        </View>
    )
}

export default CounterScreen