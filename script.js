const ws = new WebSocket('ws://localhost:8080');
const form = document.querySelector('form');

ws.onopen = function () {
    console.log("web sockets are running..");
}

document.querySelector('form').onsubmit = ev => {
    ev.preventDefault();
    const input = document.querySelector('input');
    if (input.value) {
        ws.send(input.value);
        showMessage(input.value, true);
        input.value = '';
    }
}


function showMessage(mes, isMine = false) {
    document.querySelector('.messages').innerHTML +=
        `<div class="message-row ${isMine ? 'mine' : 'other'}" >
    <div class="bubble">${mes}</div>
    <div>`
}


ws.onmessage = function (event) {
    const { data } = event;
    showMessage(data);
}