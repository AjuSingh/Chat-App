const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port:8080
},()=>{
    console.log("web socket started.");
})

wss.on('connection', (ws) => {
    ws.on('message', (data, isBinary) => {
       [...wss.clients].filter((client) => client !== ws)
            .forEach((client) => {
                client.send(data + "");
            })
    })
})