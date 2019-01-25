

var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 8080 });
  wss.on('connection', function (ws) {
      console.log('client connected');
      // ws.send('来自node.js已连接的---自动回复')

      ws.on('message', function (message) {
          console.log(message);
          // ws.send('来自node.js收到消息的---自动回复')
      });
  });