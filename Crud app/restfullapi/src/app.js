const express = require("express");
const student = require("./models/students");
require("./db/conn");
const Student = require("./models/students");
const app=express();
const port = process.env.PORT || 8000;


app.use(express.json());

app.post("/students", async(req,res)=>{

try{


const user = new Student(req.body);
const createuser = await user.save();
res.status(201).send(createuser);

}catch(e){ res.status(400).send(e);     }

})

//read data
app.get("/students", async(req,res)=>{

    try{

        const studentdata = await Student.find();
        res.send(studentdata);

    }catch(e){
        res.send(e);
    }



})


//by id

/*app.get("/students/:id", async(req,res)=>{
    try{

        const _id = req.params.id;
        const studentsdata = await Student.findById(_id);
        

        if(!studentsdata){

            return res.status(404).send();
        }else{


            res.send(studentsdata);
        }



    }catch(e){

        res.status(500).send(e);
    }


})



app.get("/students/name",async(req ,res)=>{

try{


    const stname = req.params.name;
    const studentname = await Student.find(stname);


    if(!studentname){

        return res.status(404).send();
    }else{


        res.send(studentname);
    }



}catch(e){

    res.status(500).send(e);
}






})

*/

//update by id
app.patch("/students/:id", async(req, res)=>{

    try{

        const _id = req.params.id;
       const updatestd = await Student.findByIdAndUpdate(_id, req.body, {
           new : true
       }
       );
       res.send(updatestd);


    }catch(e){

        res.status(400).send(e); 



    }




    
})

//delete by id 

app.delete("/students/:id", async(req, res) =>{
        try{
            const _id = req.params.id;
        
            const dltstd = await Student.findByIdAndDelete(_id);
            if(!_id){

                return res.status(400).send();
            }
            res.send(dltstd);



        }catch(e){
            res.status(500).send(e);



        }


        



})



app.listen(port,()=>{

    console.log(`connection is setup at ${port}`);
})