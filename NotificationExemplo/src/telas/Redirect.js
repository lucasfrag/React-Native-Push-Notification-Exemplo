import React, {Component} from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default class Redirect extends Component {
  render() {
    return(
      <View style={styles.container}>
          <Text>Essa é a tela de redirecionamento. 😉</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10
  }
})