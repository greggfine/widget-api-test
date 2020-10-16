const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json("cool!")
})

app.listen(8081, () => {
    console.log("server is running")
})