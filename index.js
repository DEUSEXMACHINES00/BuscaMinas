const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname+'/public')));
const server = app.listen(3700, () => {
  console.log('Servidor iniciado en el puerto 3700');  
});

const SocketIO = require('socket.io');
const io = SocketIO(server)
io.on('connection', (socket) => {  
  console.log("En el webscoket", socket.id)
});


