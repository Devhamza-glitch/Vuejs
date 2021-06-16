const express = require("express");
const user = require("./models/users");
require("./db/conn");
const Users = require("./models/users");
const app=express();
const port = process.env.PORT || 8000;


app.use(express.json())
//create a new user
app.post("/users", async(req,res)=>{

    try{
    
    
    const user = new Users(req.body);
    const createuser = await user.save();
    res.status(201).send(createuser);
    
    }catch(e){ res.status(400).send(e);     }
    
    })
    
    //read data
    app.get("/users", async(req,res)=>{
    
        try{
    
            const userData = await Users.find();
            res.send(userData);
    
        }catch(e){
            res.send(e);
        }
    
    
    
    })
    
    
    //by id
    
    app.get("/users/:id", async(req,res)=>{
        try{
    
            const _id = req.params.id;
            const userData = await Users.findById(_id);
            
    
            if(!userData){
    
                return res.status(404).send();
            }else{
    
    
                res.send(userData);
            }
    
    
    
        }catch(e){
    
            res.status(500).send(e);
        }
    
    
    })
    
    
    
    
    //update by id
    app.patch("/users/:id", async(req, res)=>{
    
        
        
        try{
    
           const _id = req.params.id;
           const updateuser = await Users.findByIdAndUpdate(_id, req.body, {
               new : true
           }
           );
              
           res.send(updateuser);
    
    
        }catch(e){
    
            res.status(400).send(e);  
        }
    
    
    
    
        
    })
    
    //delete by id 
    
    app.delete("/users/:id", async(req, res) =>{
            try{
                const _id = req.params.id;
            
                const dltuser = await Users.findByIdAndDelete(_id);
                if(!_id){
    
                    return res.status(400).send();
                }
                res.send(dltuser);
    
    
    
            }catch(e){
                res.status(500).send(e);
    
    
    
            }
    
    
    })
    
    
    
    app.listen(port,()=>{
    
        console.log(`connection is setup at ${port}`);
    })