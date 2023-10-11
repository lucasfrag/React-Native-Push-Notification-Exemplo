// Componentes base
import React, {Component} from "react"

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Importação de telas e serviços
import { Notification } from "./src/NotificationService"
import Home from './src/telas/Home'
import Redirect from './src/telas/Redirect'

// Declaração de constantes
const notificador = Notification;
const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount() {
    notificador.configurar()
    notificador.criarCanal()
    notificador.agendarNotificacoes()
  }

  onPressEnviarNotificacao = () => {
    notificador.mostrarNotificacao(
      1, 
      "Home", 
      "👉 Essa é a minha primeira notificação sendo disparada.", 
      {}, 
      {}
    ),
    notificador.mostrarNotificacao(
      2,
      "Olá, mundo! 👋",
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {
              ({navigation}) => {
                notificador.setNavigation(navigation)
                return(
                  <Home 
                    Enviar={this.onPressEnviarNotificacao}
                    Cancelar={this.onPressCancelarNotificacoes}
                  />
                )
              }
            }
          </Stack.Screen>
          <Stack.Screen name="Tela de redirecionamento" component={Redirect} />
          <Stack.Screen name="Olá, mundo! 👋" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}