const express = require('express');
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT;
const cors =require('cors');
const SingleText = require('./models/singleTextModel');
const mongoose = require('mongoose');
const DB = process.env.DB;
const AddNewTask = require('./models/AddNewTask');

app.use(cors());
app.use(express.json());

app.listen(port,()=>console.log(`server is running on port ${port} `));

app.get("/testing",(req,res)=>{
res.send("i am testing and i am working");
});


mongoose.connect(DB).then(()=>{
    console.log("connected");
    
}).catch((err)=>{
    console.log("Error Occur"+err);
    
})


app.post("/store",async(req,res)=>{

    const AddTask = new SingleText(req.body);
    await AddTask.save();

    res.send(AddTask);

})

app.post('/newtask',async(req,res)=>{
    const Add = new AddNewTask(req.body);
    await Add.save();
    res.send(Add);
})

app.get('/all',async(req,res)=>{
    const all= await AddNewTask.find();
    res.send(all);
})

app.delete('/delete/:id',async(req,res)=>{
    await AddNewTask.deleteOne({id:parseInt(req.params.id)});
    res.send("deleted successfully");
})

app.put('/update/:id',async(req,res)=>{
  await AddNewTask.findOneAndUpdate(
        {id:req.params.id},
        req.body,
        {new:true}
    );
    res.send("updated successfully");
})

process.on('SIGINT', async () => {
  console.log('\nShutting down server...');
  await mongoose.connection.close();
  console.log('MongoDB connection closed.');
  process.exit(0);
});