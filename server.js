const express = require("express");
const app = express();
const port = 80

app.get("/", (req, res) => {
    res.send("<h1>hi</hi>");
})

app.listen(port, (err) => {
    if (!err) {
        console.log("All Set! You Can Now Enter Dent!")
    } else {
        console.error("There was an error! the error: " + err)
    }
})