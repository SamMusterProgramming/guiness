const express = require('express');
const userModel = require('../models/userModel');
const route = express.Router();





route.post("/register", async (req, res) => {
    try {
      console.log(req.body)
      const email = await userModel.findOne({email:req.body.email})
      if(email) return res.status(400).json('email exist already')
      const username = await userModel.findOne({username:req.body.username})
      if(username) return res.status(400).json('username taken')
      if(req.body.password !== req.body.confirmpassword) 
      return res.status(400).json("wrong password");
      console.log('i am here mongoDb')
      const newUser = new userModel(
        {
           username: req.body.username,
           email: req.body.email,
           password: req.body.password
        })
      await newUser.save();

      return res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  
  
route.post("/login", async (req, res) => {
    try {
      console.log("I am here")
      const user =   await userModel.findOne({email:req.body.email});
      if (!user) return res.status(400).json("user not found")
      const password = await userModel.findOne({password:req.body.password})
      if(!password) return res.status(400).json("password not found")
      return res.status(200).json(user);
    } catch (err) {   
      res.status(500).json(err)
    }
  });
  
  // function registerAuth(req,res,next)  {
     
  // }

  module.exports = route ; 