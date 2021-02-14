import React from "react";
import {View } from "react-native";

import ImageDetail from "../components/ImageDetail"

const ImageScreen = ()=>{
    return (<View>
        <ImageDetail 
            title="Forest"
            imgSrc={require('../../assets/forest.jpg')}
            score={9}
            imgDetail="Forest image" />
        <ImageDetail 
            title="Beach" 
            imgSrc={require('../../assets/beach.jpg')}
            score={7}
            imgDetail="Forest image" />
        <ImageDetail 
            title="Mountain" 
            imgSrc={require('../../assets/mountain.jpg')}
            score={10}
            imgDetail="Forest image"  />
    </View>)
}
export default ImageScreen