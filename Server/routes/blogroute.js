const express = require('express');
const router = new express.Router();

router.get('/', (req,res)=> {
    res.send("This is Blog");
})