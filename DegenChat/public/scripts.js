const msgBox = document.querySelector(".msg-box");
const form = document.querySelector("form");
const socket =  io();
const messages = document.querySelector("#messages");

form.addEventListener('submit', event => {
    event.preventDefault();
    const message = msgBox.value.trim();
    if (!message) return;
    
    socket.emit("chat message", message);

    msgBox.value = "";
    msgBox.focus();
});

socket.on("chat message", message => {
    const li = document.createElement('li');
    li.textContent = message;
    messages.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight);
})