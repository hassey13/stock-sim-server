var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){

  socket.on('priceUpdate', function( price ){
    console.log('Price requested!')

    setTimeout( function() { console.log("I waited!")}, 5000)
    io.emit('priceUpdate', price + 1)
  })

})

// start the server
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
})
