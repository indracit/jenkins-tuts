const express = require('express')
const app = express();

app.use('/',(req,res)=>{
res.send({"message":"hi"})
})

app.use('/*',(req,res)=>{
    res.send({"message":"not found"})
    })

app.listen(3001,()=>{
    console.log('app url: http://localhost:3001');
})

