import React, {Component} from 'react'
import { 
  Dimensions,
  Image,
  StyleSheet,
  AppRegistry, 
  Text, 
  View,
  StatusBar} from 'react-native'

  import plane from './plane.jpg'

export default class App extends React.Component {
  render () {
    return (
      <View style = {styles.container}>
        <StatusBar hidden = {true}></StatusBar>
        <Text style={[styles.defaultText]}>Welcome Aboard
        </Text>
        <Text style={[styles.selectedText]}>Air Canada
        </Text>
        <View>
          <Image style = {styles.pic} source = {plane}>
          </Image>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pic : {
    backgroundColor: 'white',
    borderRadius: 100,
    width: Dimensions.get('window').width, 
    height: 160,
    resizeMode: 'cover',
    
  },
  defaultText: {
    fontSize: 22,
    padding: 30,
    color: 'red',
    margin: 5
  },
  selectedText: {
    backgroundColor: 'black',
    fontSize: 22,
    justifyContent: 'center',
    padding: 20,
    paddingLeft: 141,
    paddingRight: 141,
    color: 'white',
    fontWeight: 'bold'
  }
})

AppRegistry.registerComponent('helloworld', () => App)
