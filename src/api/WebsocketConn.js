class WebsocketConn {
    constructor() {
        this.websocket = new WebSocket('ws://127.0.0.1:8080/ws')
        this.connect()
    }

    connect() {
        this.websocket.onopen = function () {
            console.log('Connected');
        };
        this.websocket.onclose = function () {
            console.log('Closed');
        };
        this.websocket.onmessage = function (message) {

            console.log('Message Received: ', message.data)
        }
    }

    addListener(listner) {
        console.log('addListener')
        this.websocket.addEventListener("message", (message) => {
            let data = JSON.parse(message.data)
            listner(data)
        })
    }

    sendMessage(message) {
        console.log('sendMessage')
        this.websocket.send(message)
    }
}

export default WebsocketConn; 