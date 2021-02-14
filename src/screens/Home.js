import React from "react";
import { Text,StyleSheet, View , Button, TouchableOpacity} from "react-native";

const Home = ({navigation})=>{
    const name = "Hamza"
    return (<View style={styles.viewStyle} >
                <Text style={styles.text1}>Getting Started With React Native</Text>
                <Text style={styles.text2}>My name is {name}</Text>
                <Button title="Click Me"
                    onPress={()=> navigation.navigate("About")}
                />
                <Button title="Image Demo"
                    onPress={()=> navigation.navigate("Image")}
                />
                <Button title="Counter Demo"
                    onPress={()=> navigation.navigate("Counter")}
                />
                <Button title="Color Demo"
                    onPress={()=> navigation.navigate("Color")}
                />
                <Button title="Square Demo"
                    onPress={()=> navigation.navigate("Square")}
                />
                <Button title="Box Demo"
                    onPress={()=> navigation.navigate("Box")}
                />
                <TouchableOpacity onPress={()=>  navigation.navigate("List") } >
                    <Text>Go To List Demo</Text>
                </TouchableOpacity>
        </View>)}

const styles = StyleSheet.create({
    viewStyle:{
      
    },
    text1:{
        fontSize:45,
        color:"red",
    },
    text2:{
        fontSize:20
    }
})
export default Home;