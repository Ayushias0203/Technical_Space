require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const keysecret = process.env.SECRET_KEY;

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
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }

    next()
})


// Token generation

userSchema.methods.generateAuthtoken = async function(){
    try{
        let token23 = jwt.sign({_id:this._id},keysecret,{
            expiresIn:"7d"
        });
        this.tokens = this.tokens.concat({token:token23});
        await this.save();
        return token23;
    } catch(error){
        res.status(422).json(error)
    }
}


// Creating Model

const userdb = new mongoose.model("userstalk",userSchema)

module.exports = userdb;