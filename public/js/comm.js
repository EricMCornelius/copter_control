var socket = io('http://localhost');
socket.on('connect', function() {
  console.log('Connected socket');
  socket.on('event', function(data) { console.log(event); });
  socket.on('disconnect', function() { });
});
