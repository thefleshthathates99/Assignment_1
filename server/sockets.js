module.exports = function(app, io){
  console.log("Server Socket Initialised");
  //respond to connection request
  io.on('connection', (socket) => {
    //respond to disconnect request
    socket.on('disconnect', function(){
      console.log('User Disconnection');
    });
    //respond to getting a new message
    socket.on('add-message', (message) =>{
      //broadcast the message to all other users that are subscribed to this sockets
      io.emit('message', {type: 'message', text:message});
    });
  });
};
