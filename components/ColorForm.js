import React, { Component } from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'


export default class ColorForm extends React.Component {
  constructor () {
    super ()
    this.state = {
      txtColor: ''
    }
    this.submit = this.submit.bind(this)
  }
  submit () {
    this.props.onNewColor(this.state.txtColor.toLowerCase())
    this.setState({txtColor: ""})
  }

  render () {
    return (
      <View style = {style.container}>
        <TextInput style = {style.txtInput} placeholder= "Enter a Color..." onChangeText = {(txtColor) => this.setState({txtColor})} value = {this.state.txtColor}/>
        <Text style = {style.button} onPress = {this.submit}>ADD</Text>

      </View>
    )
  }
}
ColorForm.propTypes = {
  onNewColor: PropTypes.func

}

const style = StyleSheet.create ({
  container : {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    backgroundColor: 'lightgrey',
    height : 70

  },
  txtInput: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5, 
    backgroundColor: 'snow'

  },
  button : {
    backgroundColor: 'darkblue',
    margin: 5,
    padding: 5,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color : 'white'

  }
})