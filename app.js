const express = require('express');
const unirest = require("unirest");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hi there!")    
});

app.get("/users", (req, res) => {
    var req = unirest.get("http://localhost:5000/users/all")

    req.end((response) => {
        if (response.error) throw new Error(response.error)
            res.send(response.body)
            console.log(response.body)
    })    
});

app.get("/users/:id", (req, res) => {
    var req = unirest.get("http://localhost:5000/users/"+req.param('id'))

    req.end((response) => {
        if (response.error) throw new Error(response.error)
            res.send(response.body)
            console.log(response.body)
    })    
});

app.listen(port, () => {
    console.log("starts");
});