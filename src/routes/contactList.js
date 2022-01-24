const express = require('express');
const router = new express.Router()

const Contact = require('../models/contactList')


router.post('/addContact',async(req,res)=>{
    try{
        const contactList = new Contact({
            ...req.body
        })
        await contactList.save()
        return res.status(200).send({
            msg:'contact added'
        })
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})

router.get('/getContact',async(req,res)=>{
    try{
        const getContact = await Contact.find({})
        return res.status(200).send(getContact)
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})


router.get('/getContactByEmail',async(req,res)=>{
    try{
        const getContact = await Contact.find({email:req.query.email})
        return res.status(200).send(getContact)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})


module.exports = router