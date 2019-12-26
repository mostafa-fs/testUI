const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hi!");

    // var unirest = require("unirest")

    // var req = unirest.get("http://localhost:5000/users/all")

    // req.end((res) => {
    //         if (res.error) throw new Error(res.error)
    //         console.log(res.body)
    // })    
});

app.listen(port, () => {
    console.log("starts");
});