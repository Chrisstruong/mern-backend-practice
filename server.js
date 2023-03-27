require('dotenv').config()

const {PORT, MONGODB_URI} = process.env

const express = require("express")
const peopleController = require("./controllers/people-controller")

const app = express()

app.get("/", (req, res)=>{
    res.send("hello world")
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))