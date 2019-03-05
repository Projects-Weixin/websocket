

// var WebSocketServer = require('ws').Server,
// wss = new WebSocketServer({
//    port: 8080 
// });
//   wss.on('connection', function (ws) {
//       console.log('client connected');
//       // ws.send('来自node.js已连接的---自动回复')
//     ws.on('message', function (message) {
//       console.log(message);
//       // ws.send(message)
//     });
//   });



var WebSocketServer = require('ws').Server;
var ws = new WebSocketServer({
  port: 8080
});
let socket
var socketID = 0;
var messageID = 0;

ws.on('connection', function (wsocket, req) {
    let ip = req.connection.remoteAddress; // 通过req对象可以获得客户端信息，比如：ip，headers等  
    socketID++;
    console.log('客户端已连接' + socketID)
    socket = wsocket
    wsocket.on('message', message)
    wsocket.on('close', close);
    wsocket.on('error', error);
    wsocket.on('open', open);
});

function message(msg) {
  messageID++;
  
  console.log(msg + messageID);
  // if (msg == '群发') {
  //   ws.clients.forEach(function each(client) {
  //     console.log('服务器对所有终端广播消息');
  //     client.send('服务器回复');
  //   });
  // } else {
  //   //单回消息
    socket.send('服务器回复');
  // }
}
function error(err) {
  console.log('socket server error'+err);
}
function close() {
  socketID--;
  console.log('socket server close'+socketID);
}
function open() {
  console.log('socket server open');
}
