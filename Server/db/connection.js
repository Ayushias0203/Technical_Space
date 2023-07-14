require('dotenv').config();
const mongoose = require('mongoose');
// <<<<<<< master
// const DB = process.env.REACT_APP_DB_MONGO;
// =======

const DB = process.env.DB_HOST;
>>>>>>> master

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Connected to database")).catch((error)=>console.log(error.message));
