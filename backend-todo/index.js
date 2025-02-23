const express = require("express");
const cors = require("cors");
const app =  express();

app.use(express.json());
app.use(cors());


let todoList=[];

app.get('/', (req,res)=>{
    res.send({todoList});
});

app.post('/', (req,res)=>{
    const {name, done} = req.body;
    if(!name){
        return res.status(404).json({error: "Add a new Task"});
    }
    const todoItem = {
        id: todoList.length >0 ? todoList[todoList.length-1].id +1: 1,
        name:name, 
        done:false};

    todoList.push(todoItem);
    res.status(201).json({message:"task added", data: todoItem});
});

app.put('/:id', (req,res)=>{
    const {id} = req.params;
    const {done} = req.body;
    const todoId = parseInt(id);
    const todoindex = todoList.findIndex(index =>index.id === todoId);

    if(todoindex === -1){
        return res.status(404).json({error: "id not found"})
    }
    todoList[todoindex].done = done;
    res.json({message: "task updated", data: todoList[todoindex]});
})


app.delete('/:id', (req,res)=>{
    const{id} =req.params;
    const todoId = parseInt(id);
    const todoIndex = todoList.findIndex(item =>item.id === todoId);

    if(todoIndex === -1){
        return res.status(404).json({error: "id not found"})
    }
    const deletedTask = todoList.splice(todoIndex,1);
    res.json({
        message: "task deleted succesfully",
        data: deletedTask
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})