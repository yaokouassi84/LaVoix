var socket = new SockJS('/ws');
var stompClient = Stomp.over(socket);

stompClient.connect({}, function(frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/messages', function(response) {
        console.log('Message received: ' + response.body);
    });
});

function sendMessage() {
    var message = document.getElementById('messageInput').value;
    stompClient.send("/app/chat", {}, message);
}
