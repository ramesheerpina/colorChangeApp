import React, { Component } from "react";
import { Alert, AppRegistry } from "react-native";
import ColorList from "./components/ColorList";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from "./components/Navigate";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
/*
const AppNavigator = createStackNavigator({
  Home: {
    screen: ColorList
  }
});

export default AppNavigator;
*/
