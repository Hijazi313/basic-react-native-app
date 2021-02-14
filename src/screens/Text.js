import React,{useState} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

const reducer = (state, action)=>{
    switch (action.type) {
        case "INCREASE":
            return {...state, count: count++}
        case "DECREAsE":
            return {...state, count: count--}           
        default:
            state
    }
}
const TextScreen = ()=>{
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View>            
            <TextInput styl={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(val)=> setName(val)}
            />
            <TextInput styl={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(val)=> setPassword(val)}
            />
            <Text>My Name is {name}</Text>
            {password.length > 4 ? null :<Text>Password must be longer than 4 characters</Text> }
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:"black",
        borderWidth:1
    }
})

export default TextScreen