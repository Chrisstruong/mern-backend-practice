const express = require("express")
const router = express.Router()
const {People} = require("../models")

require("../config/db.connection")

router.get("/", async(req,res)=>{
    try {
        res.json(await People.find({}))
    } catch(error){
        res.status(400).json(error)
    }
})

router.post("/", async(req,res)=>{
    try {
        res.json(await People.create(req.body))
    } catch(error){
        res.status(400).json(error)
    }
})

router.get("/:id", async(req, res)=> {
    try{
        res.json(await People.findById(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

router.delete("/:id", async(req, res)=> {
    res.status(200).json({message: "people delete route" + req.params.id})
})

router.put("/:id", async(req, res)=> {
    console.log(req.body)
    res.status(200).json({message: "people update route" + req.params.id})
})

module.exports = router