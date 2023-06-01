require("dotenv").config();
const express = require('express');
const app = express();
require ("dotenv").config();
const mongoose = require("mongoose");
require("./db/connection");
const router = require("./routes/router")
const cors = require('cors')
const cookieParser = require('cookie-parser')

// console.log(process.env);

const port = 8000;

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cors());
app.use(router);
app.use(cookieParser());

app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`);
})
