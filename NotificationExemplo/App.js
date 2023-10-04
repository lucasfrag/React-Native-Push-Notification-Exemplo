import React, {Component} from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import { Notification } from "./src/NotificationService"

const notificador = Notification;

export default class App extends Component {
  componentDidMount() {
    notificador.configurar()
    notificador.criarCanal()
  }

  onPressEnviarNotificacao = () => {
    notificador.mostrarNotificacao(
      1, 
      "Olá, mundo! 👋", 
      "👉 Essa é a minha primeira notificação sendo disparada.", 
      {}, 
      {}
    ),
    notificador.mostrarNotificacao(
      2,
      "Outra mensagem",
      "Essa é a minha segunda mensagem.",
      {},
      {}
    )
  }

  onPressCancelarNotificacoes = () => {
    notificador.cancelarTodasNotificacoes()
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPressEnviarNotificacao}>
          <Text>Enviar notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.onPressCancelarNotificacoes}>
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