const domain = 'xx.xx.com';

const http_host = 'https://' + domain + ':8289/spoc_t/';

const socket_host = 'wss://' + domain + ':8288';

/**
 * http请求
 */
var http = {
  /**
  * 登录
  */
  login: http_host + 'spoc-oauth-api/login',
}

/**
 * socket 指令
 * 
 * cmd	      Y	string	指令符
 * device	    Y	string	设备类型(0-pc，-mp，2-app)
 * from	      Y	string	发送者
 * to	        Y	string	接受者
 * classId	  Y	string	班级ID
 * classRoomId	Y	string	课堂ID
 * courseId	  Y	string	课程ID
 * 
 */
var cmd = {
  /**
 * 心跳
 */
  heart: 'heart',
}

module.exports = {
  http_host: http_host,
  socket_host: socket_host,
  http: http,
  cmd: cmd,
};