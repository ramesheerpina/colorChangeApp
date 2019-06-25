import React, {Component} from 'react'
import { View, StyleSheet} from 'react-native'
import ColorButton from './components/colorButton'

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
          <ColorButton backgroundColor = 'red' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'green' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'blue' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'salmon' onSelect= {this.changeColor}/>
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
  }
})