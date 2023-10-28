const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");

const PORT = 3001;
const HOST_NAME = "localhost";

const app = express();
app.use(express.static("HTML"));
app.use(express.static("CSS"));
app.use(express.static("JS"));
app.use(express.static("Resources"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "get.html"));
  });

app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "create.html"));
    });

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "contact.html"));
    });

app.get("/modify", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "modify.html"));
    });

app.get("/delete", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "delete.html"));
    });

app.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})