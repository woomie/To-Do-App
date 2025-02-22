import express from "express";

const app =  express();
app.use(express.json());

let todoList=[];

app.get('/', (req,res)=>{
    res.send({todoList});
});

app.post('/', (req,res)=>{
    const {text, done} = req.body;
    if(!text){
        return res.status(404).json({error: "message is required"});
    }
    new todoItem = {
        name:text, 
        done};

    todoList.push(todoItem);
    res.status(201).json({message:"message added", data: todoItem});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})