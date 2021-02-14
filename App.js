import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import { StatusBar } from 'expo-status-bar';

import HomeScreen from "./src/screens/Home"
import ListScreen from "./src/screens/List"
import AboutScreen from "./src/screens/About"
import ImageScreen from "./src/screens/Image"
import CounterScreen from "./src/screens/Counter"
import ColorScreen from "./src/screens/Color"
import SquareScreen from "./src/screens/Square"
import TextScreen from "./src/screens/Text";
import BoxScreen from "./src/screens/Box";

 

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
