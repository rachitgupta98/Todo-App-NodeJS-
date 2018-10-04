//author Rachit gupta
const express = require("express");
const todocontroller = require("./controller/todo-controller");

const app = express();

app.set("view engine", "ejs"); //template engine
app.use(express.static("./assest"));
todocontroller(app);

app.listen(4000);
console.log("Listening to the port no 4000");
