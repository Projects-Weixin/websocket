

var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 8080 });
  wss.on('connection', function (ws) {
      console.log('client connected');
      ws.send('node.js已收到连接')

      ws.on('message', function (message) {
          console.log(message);
          ws.send('node.js已收到消息，又发送一条回复消息')
      });
  });