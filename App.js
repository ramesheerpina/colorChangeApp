import React, {Component} from 'react'
import { 
  StyleSheet,
  AppRegistry, 
  Text, 
  View,
  StatusBar} from 'react-native'

const styles = StyleSheet.create ({
  defaultText: {
    fontSize: 22,
    padding: 30,
    color: 'red',
    borderWidth: StyleSheet.hairlineWidth,
    margin: 5
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
})
export default class App extends React.Component {
  render () {
    return (
      <View>
        <StatusBar hidden = {true}></StatusBar>
        <Text style={styles.defaultText}>Welcome Aboard
        </Text>
        <Text style={[styles.selectedText,styles.defaultText]}>Air Canada
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('helloworld', () => App)
