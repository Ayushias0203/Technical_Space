require('dotenv').config();
const mongoose = require('mongoose');

const DB = process.env.DB_HOST;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Connected to database")).catch((error)=>console.log(error.message));