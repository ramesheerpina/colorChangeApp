import React, {Component} from 'react'
import { ListView, StyleSheet, Text} from 'react-native'
import ColorButton from './components/colorButton'
import ColorForm from './components/ColorForm'

  import plane from './plane.jpg'

export default class App extends React.Component {
  constructor () {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1!==r2
    })
    const availableColors = [
      'Red',
      'Green',
      'Yellow'
    ]
    this.state = {
      backgroundColor: 'blue', availableColors, dataSource: this.ds.cloneWithRows(availableColors)
    }
    //this is used to set state and change the color within that state
    this.changeColor = this.changeColor.bind(this)
    this.newColor = this.newColor.bind(this)
  }
  //declaring a method to change the backgroundcolor
  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  newColor(color) {
    const availableColors = [
      ...this.state.availableColors, color
    ]
    this.setState({
      availableColors, dataSource: this.ds.cloneWithRows(availableColors)
    })
  }

  render () {
    const {backgroundColor, dataSource} = this.state
    return (
      //getting the background color from state that was declared in constructor above
      <ListView style = {[styles.container, {backgroundColor}]}
      dataSource={dataSource} 
      renderRow= {(color) => (<ColorButton backgroundColor = {color} onSelect= {this.changeColor}/>
        )}
      renderHeader = {() => (
        <ColorForm onNewColor = {this.newColor}/>
      )}>
      
        
      </ListView>
    )
  }
}

const styles = StyleSheet.create (
  {
  container : {
    flex: 1
    
  },
  header: {
    backgroundColor : 'lightgrey',
    paddingTop: 20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  }
})