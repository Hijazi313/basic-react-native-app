import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const List  = ()=>{
    const friends = [
        {name:"Friend 1", key: '1', age: "32"},
        {name:"Friend 2", key: '2', age: "34"},
        {name:"Friend 3", key: '3', age: "22"},
        {name:"Friend 4", key: '4', age: "42"},
        {name:"Friend 5", key: '5', age: "52"},
        {name:"Friend 6", key: '6', age: "12"},
        {name:"Friend 7", key: '7', age: "52"},
    ]
    return(
        <FlatList 
            keyExtractor={(friend)=> friend.name }
           data={friends}
           renderItem={({item,index})=> <Text style={styles.textStyle} >{item.name} - Age {item.age}</Text>} />
    );
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
})
export default List