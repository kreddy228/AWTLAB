var express=require('express')
var jwt=require('jsonwebtoken')
var app=express();
app.get('/api',(req,res)=>{
    res.json({
        message:"Welcome to API"
    })
})
app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err)
         {
            res.sendStatus(403)
         }
        else{
            res.json({
                message: "Post Created...",
                authData
            
            })
        }
    })
})
app.post('/api/login',(req,res)=>{
    const user={
        id:1144,
        name:"karthik",
        email:"karthik123@gmail.com"
    }
    jwt.sign({user},"secretkey",(err,token)=>
    {
        res.json({
            token
        })
    })
    
})
function verifyToken(req,res,next){
const bearerHeader =req.headers['authorization']
    const bearer=bearerHeader.split(' ');
    const bearerToken=bearer[1];
    req.token=bearerToken;
    next()

}
app.listen(3000,()=>console.log("Server Started ..."));