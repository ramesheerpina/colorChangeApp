import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

  import plane from './plane.jpg'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    //this is used to set state and change the color within that state
    this.changeColor = this.changeColor.bind(this)
  }
  //declaring a method to change the backgroundcolor
  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }
  render () {
    const {backgroundColor} = this.state
    return (
      //getting the background color from state that was declared in constructor above
      <View style = {[styles.container, {backgroundColor}]}>
        <Text style = {styles.button} onPress = {()=>this.changeColor('green')}>Green</Text>
        <Text style = {styles.button} onPress = {()=>this.changeColor('red')}>Red</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create (
  {
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button : {
    fontSize: 30,
    padding : 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
})