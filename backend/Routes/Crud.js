const express = require('express');
const router = express.Router();
const user = require('../models/User');
const { body,validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const jwtSecret = "hellomynameisakshitaggarwalandia";

router.post("/createuser", 
body('email', 'incorrect email').isEmail(),
body('password', 'incorrect password').isLength({min: 5}),
body('contact', 'incorrect contact number').isInt({min:1000000000, max:10000000000}),
async(req, res) => {
   const error = validationResult(req);
   if(!error.isEmpty()){
    return res.status(400).json({errors: error.array() });
   }
   
   const salt = await bcrypt.genSalt(10);
   let secPassword = await bcrypt.hash(req.body.password, salt)

   try{
      await user.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        contact: req.body.contact
      })
      res.json({success: true});
   } catch(err){
    //    console.log(err);
       res.json({success: false});
   }
}
)

router.post("/loginuser", 
async (req, res)=>{
   let email = req.body.email;
   try {
    let userData = await user.findOne({email});
    if(!userData){
        return res.status(400).json({errors: "Try logging in with correct email" });
    }
    const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
    if(!pwdCompare){
        return res.status(400).json({errors: " Try logging in with correct password "});
    }

    const data = {
        user:{
            id:userData.id
        }
    }

    // the authtoken is created with help of user's id. the payload of authToken is created by the user's id and the secret portion is the jwtSecret made at top of file. 
    const authToken = jwt.sign(data, jwtSecret);
    // when a user loggs in successfully, an authToken is created for it and stored in local storage. 
    return res.json({success: true, authToken: authToken});
   } catch(err) {
    // console.log(err);
    res.json({success: false});
   }
})

module.exports = router;