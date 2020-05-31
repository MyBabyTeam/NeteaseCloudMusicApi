const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// 包含房间号与用户
const room = {};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});