import React, {Component} from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.Enviar}>
          <Text>Enviar notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.props.Cancelar}>
          <Text>Cancelar notificações</Text>
        </TouchableOpacity>
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