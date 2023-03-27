require('dotenv').config()

const {PORT, MONGODB_URI} = process.env

const express = require("express")
const peopleController = require("./controllers/people-controller")

const app = express()
const cors = require("cors")
const morgan = require("morgan")

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use('/people', peopleController)

app.get("/", (req, res)=>{
    res.send("hello world")
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))