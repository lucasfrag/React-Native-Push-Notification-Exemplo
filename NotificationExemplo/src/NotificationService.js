import PushNotification from 'react-native-push-notification'

class NotificationService {

    // Criar canais
    criarCanal = () => {
        PushNotification.createChannel(
            {
                channelId: "notificador",
                channelName: "Notificador do app",
                channelDescription: "Meu canal de notificações do aplicativo."
            },
            (created) => console.log(`createChannel returned '${created}'`)
        )
    }

    // Configuração do disparo de notificações
    configurar = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token)
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification)
                navegador.navigate(notification.title)
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
            }
        })
    }

    // Construir a notificação
    construirNotificacaoAndroid = (id, title, message, data={}, options={}) => {
        return {
            id: id,
            channelId: "notificador",
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || "",
            subText: title || "",
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    // Mostrar a notificação
    mostrarNotificacao = (id, title, message, data={}, options={}) => {
        PushNotification.localNotification({
            ...this.construirNotificacaoAndroid(id, title, message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || "default",
            userInteraction: false
        })
    }

    // Configuração de notificações agendadas
    agendarNotificacoes = () => {
        PushNotification.localNotificationSchedule({
            channelId: "notificador",
            title: "Tela de redirecionamento", 
            id: 3,
            message: "Notificação agendada 1 😉",
            date: new Date(Date.now() + 5 * 1000),
            repeatType: "minute",
            repeatTime: 1
        })
    }

    // Passar o atributo "navigation" do React Navigation para as notificações
    setNavigation = (novoNavegador) => {
        navegador = novoNavegador
    }

    // Cancelar todas as notificações
    cancelarTodasNotificacoes = () => {
        PushNotification.cancelAllLocalNotifications();
    }
}

export const Notification = new NotificationService();