const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not valid email")
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    cpassword:{
        type: String,
        required: true,
        minlength: 6
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
});


// hash password

userSchema.pre("save",async function (next){
    this.password = await bcrypt.hash(this.password,12);
    this.cpassword = await bcrypt.hash(this.cpassword,12);

    next()
})

// Creating Model

const userdb = new mongoose.model("userstalk",userSchema)

module.exports = userdb;