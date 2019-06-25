import React, {Component} from 'react'
import { ListView, StyleSheet, Text} from 'react-native'
import ColorButton from './components/colorButton'

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
      'Yellow',
      'Salmon',
      'Pink',
      'Violet',
      'Indigo',
      'rgb(255, 0, 200)',
      'rgb(255, 100, 255)',
      'rgb(255, 200, 255)',
    ]
    this.state = {
      backgroundColor: 'blue', availableColors, dataSource: this.ds.cloneWithRows(availableColors)
    }
    //this is used to set state and change the color within that state
    this.changeColor = this.changeColor.bind(this)
  }
  //declaring a method to change the backgroundcolor
  changeColor(backgroundColor) {
    this.setState({backgroundColor})
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
        <Text style = {styles.header}>Color List</Text>
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