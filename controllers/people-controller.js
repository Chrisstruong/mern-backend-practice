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
    try {
        res.json(await People.findByIdAndRemove(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})  

router.put("/:id", async(req, res)=> {
    try{
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch(error) {
        res.status(400).json(error)
    }
})

module.exports = router