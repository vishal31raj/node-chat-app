//CLIENT SIDE JavaScript
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.emit('createMessage', {
        from: "jen@example.com",
        text: "Hello, Andrew."
    });
});
socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
    console.log('Got new message.', message);
});