import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native'

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
        <TouchableHighlight style= {styles.button} onPress = {() => this.changeColor('yellow')} underlayColor="orange">
        <View style = {styles.row}>
          <View style = {[styles.sample, {backgroundColor:'yellow'}]}/>
            <Text style = {styles.text}>yellow</Text>
        </View>
        </TouchableHighlight>

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
    
    padding : 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sample : {
    height : 20,
    width: 20,
    borderRadius: 10,
    margin : 5,
    backgroundColor: 'white',
  },
  text: {
    fontSize : 30,
    margin : 5
  }
})