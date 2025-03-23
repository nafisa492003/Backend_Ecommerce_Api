const userSchema = require("../models/userSchema");
const emailValadation = require("../helpers/emailValidation");
const bcrypt = require("bcrypt");
const logController = async (req,res)=>{
const {email, password}=req.body
try{
    if (!email) {
        return res.json({ error: "email is requred" });
      }
      if (!emailValadation(email)) {
        return res.json({ error: "Plaease enter a valid email" });
      }
      if (!password) {
        return res.json({ error: "Password is required" });
      }
      const user = await userSchema.findOne({email})
          if(!user){
              return res.status(404).json({error:"User is not found."})
          }
          if (user.isVerified !== true) {
            return res.json({error:"User is not verified."})
          }
          const isPasswordCorrect = await bcrypt.compare(password, user.password);
          if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid password" });
          }
          res.status(200).json({message:"login is successfully done."})
} catch (error) {
    console.error("Error in Login", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports=logController