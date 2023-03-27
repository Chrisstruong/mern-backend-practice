const express = require("express")
const router = express.Router()

require("../config/db.connection")

router.get("/", async(req,res)=>{
    res.status(200).json({message: "people index route"})
})

router.post("/", async(req,res)=>{
    res.status(201).json({message: "people create route"})
})

module.exports = router