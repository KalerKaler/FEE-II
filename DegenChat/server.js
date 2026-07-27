const { log } = require("console");
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
    console.log("HELOCOPTAAAAAA");
    socket.on("chat message", msg => {
        io.emit("chat message", msg);
    })
    socket.on("disconnect", () => {
        console.log("HE LEFT! THAT FUCKAAAA");
    })
})

server.listen(3000, () => {
    console.log("SERVICE STARTED at 3000");
})