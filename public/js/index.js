//CLIENT SIDE JavaScript
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
    console.log(message);
});





/*

*---------------- N O T E S ------------------*

1. socket.emit() emits an event to only one client, while io.emit() emits an event to all connected clients.

*/