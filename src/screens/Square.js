import React,{useReducer} from "react";
import {Button, View, FlatList, Text} from "react-native";

import ColorCounter from "../components/ColorCounter";

const reducer = (state, action)=>{
    //  state === {red:0, green: 0, blue:0 }
    //  action === {type :'red' || 'green' || "blue"}

    switch (action.type) {
        case 'red':
            state.red +action.payload > 255 || state.red +action.payload < 0 ? 
            state :
            {...state, red: state.red + action.payload}            
        case 'green':
            state.green +action.payload > 255 || state.green +action.payload < 0 ? 
            state :
            {...state, green: state.green + action.payload}                        
        case 'blue':
            state.blue +action.payload > 255 || state.blue +action.payload < 0 ? 
            state :
             {...state, blue: state.blue + action.payload}            
        default:
            return state
    }
}

const COLOR_INCREMENT =  15;
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green: 0, blue:0 })
    const {red, green, blue} = state
    return(
        <View>
            <ColorCounter 
            color="Red" 
            onIncrease={()=> dispatch({type:"red", payload: COLOR_INCREMENT }) }
            onDecrease={()=>  dispatch({type:"red", payload: -1* COLOR_INCREMENT })} />

            <ColorCounter 
            color="Blue" 
            onIncrease={()=>  dispatch({type:"blue", payload: COLOR_INCREMENT }) }
            onDecrease={()=>  dispatch({type:"blue", payload:-1 * COLOR_INCREMENT})}  />

            <ColorCounter 
            color="Green" 
            onIncrease={()=>  dispatch({type:"green", payload: COLOR_INCREMENT}) }
            onDecrease={()=>  dispatch({type:"green", payload: -1*  COLOR_INCREMENT})} />

            <View style={{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}} />
        </View>
    )
}


export default SquareScreen;