const express = require('express');
const router = new express.Router();
const userdb = require("../models/userSchema");
const Post = require("../models/BlogPost");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");


// for user registration

router.post("/register",async(req,res)=>{
    const {fname,email,password,cpassword} = req.body;
    if(!fname || !email || !password || !cpassword){
        res.status(422).json({error:"fill all the details"});
    }
    try{
        const preuser = await userdb.findOne({email:email})
        if(preuser){
            res.status(422).json({error:"This email already exist"})
        }else if(password!==cpassword){
            res.status(422).json({error:"Password and confirm password not match"})
        }else{
            const finalUser = new userdb({
                fname,email,password,cpassword
            })

            // Password hashing
            
            const storeData = await finalUser.save();

            res.status(201).json({status:201,storeData})

        }

    } catch(error){
        res.status(422).json(error);
        console.log("catch block error"); 
    }
    // console.log(req.body);
});

// for user login

router.post("/login",async(req,res)=>{
    // console.log(req.body);
    const {email,password} = req.body;
    if(!email || !password){
        res.status(422).json({error:"fill all the details"})
    }
    try{
        const userValid = await userdb.findOne({email:email});
        if(userValid){
            const isMatch = await bcrypt.compare(password,userValid.password);

            if(!isMatch){
                res.status(422).json({ error: "incorrect password"})
            }
            else{
                // token generate
                const token = await userValid.generateAuthtoken();

                // Cookie generation
                res.cookie("usercookie",token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                });
                
                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status:201,result});
            }
        }
    } catch(error){
        res.status(401).json(error);
        console.log("catch block error");
  }
});

// User valid
router.get("/validuser",authenticate,async(req,res)=>{
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
})

// user logout
router.get("/logout",authenticate,async(req,res)=>{
    try {
        req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie",{path:"/"});

        req.rootUser.save();

        res.status(201).json({status:201})

    } catch (error) {
        res.status(401).json({status:401,error})
    }
})

//router for posts 

router.post("/create", authenticate, async (req, res) => {
    try {
        await Post
          .create({
            title: req.body.post.title,
    description: req.body.post.description,
    picture: req.body.post.picture,
    username: req.body.post.username,
    categories: req.body.post.categories,
    createdDate: req.body.post.createdDate
          })
          .then(() => {
           // alert("post added successfully");
            res.status(201).send({
              status: true,
              message: "Post Added successfully",
            });
          })
          .catch((e) => {
        // console.log(req.body);
            res.status(400).send({
              status: false,
              message: "Bad request",
            });
          });
      } catch (e) {
        res.status(500).send({
          status: false,
          message: "Error while adding post",
        });
      }

});

router.put('/update/:id', authenticate, async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
});

router.delete('/delete/:id', authenticate, async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
});

//for fetching posts 
router.get('/post/:id', async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
});

router.get('/posts', async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
});


module.exports = router;