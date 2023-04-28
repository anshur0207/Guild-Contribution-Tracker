const express= require("express");
const app=express();
app.use(express.json());
const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");
const cors=require("cors");
app.use(cors());

const jwt=require("jsonwebtoken");

const JWT_SECRET="DFGHJKLK,MNBVCCVGHJKJHGFfghjkmnbvfrtyu9876";


const mongourl = "mongodb+srv://anshu:anshu@cluster0.tulmyqc.mongodb.net/test" 


mongoose.
connect(mongourl,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("connected to database");
})
.catch((e)=>console.log(e));


require("./userDetails");

const User = mongoose.model("userInfo");

app.post("/register",async(req,res)=>{
   
const {fname,lname,email,password} =  req.body;
const encryptedPassword = await bcrypt.hash(password, 10);

    try{
        const olduser=await User.findOne({email});

        if(olduser){
            return res.send({error:"User Exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,

        });
        res.send({status:"Ok"});
    }catch(error){
        res.send({status: "error"});
    }
        
})

app.post("/login-user",async(req,res)=>{
   
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.json({error:"User Not Found"});
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({email:user.email},JWT_SECRET,{
            expiresIn:1000,
        });
    
    
        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }
        else{
            return res.json({error:"error"});
        }

    }
    res.json({status:"error",error:"Invalid password"});
            
    });


app.post("/userData", async(req,res)=>{
    const {token}=req.body;

    try{
        const user=jwt.verify(token,JWT_SECRET,(err,res)=>{
           if(err){
            return "token expired";
           }
           return res;

        }); 
        console.log(user);
        if(user == "token expired"){
            return res.send({status:"error",data:"token expired"});
        }
        const useremail=user.email;
        User.findOne({email:useremail}).then((data)=>{
            res.send({status:"ok",data:data });
        })
    
    .catch((error)=>{
        res.send({status:"error",data:error});

    });
}catch(error){}
});





app.listen(4000,()=>{
    console.log("Server Started");
});











