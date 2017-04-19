var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var price = 24.54

io.on('connection', function(socket){
  console.log('New User connected!')
  io.emit('priceUpdate', price.toFixed(2))
})

setInterval( () => {
  price += (Math.random() - 0.48) / 16
  io.emit('priceUpdate', price.toFixed(2) )
}, 2500)

// start the server
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
})
