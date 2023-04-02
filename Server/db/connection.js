const mongoose = require ("mongoose");



mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Connected to database")).catch((error)=>console.log(error.message));