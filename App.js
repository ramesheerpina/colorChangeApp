import React, {Component} from 'react'
import { ScrollView, StyleSheet} from 'react-native'
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
      <ScrollView style = {[styles.container, {backgroundColor}]}>
          <ColorButton backgroundColor = 'red' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'green' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'blue' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'salmon' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = '#00ff00' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'rgb(255,0,255)' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'pink' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'yellow' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'indigo' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'violet' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'orange' onSelect= {this.changeColor}/>
          <ColorButton backgroundColor = 'rgb(255,200,255)' onSelect= {this.changeColor}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create (
  {
  container : {
    flex: 1,
    paddingTop: 20
  }
})