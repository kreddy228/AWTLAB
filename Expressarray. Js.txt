const { application } = require("express")
var express = require("express")

var app = express()

app.use(express.json())
const students =[ 
                  {"id":1,"name":"Sai"},
                  {"id":2,"name":"Nagesh"}
                ]
app.get("/",function(req,res){

    res.write("Hello World")
    res.end()

})
app.get("/getStudents",function(req,res){

    res.write(JSON.stringify(students))
    res.end()

})

//Adding Student to the array
app.post("/addStudent",function(req,res){
    students.push(req.body)
    res.write("Student added successfully")
    res.end()

})

app.delete("/deleteStudent/:id",function(req,res){

    id =req.params.id
    for (var i=0;i<students.length;i++)
    {
        id ==students[i].id
        students.splice(i,1)
    }
    res.end("Deleted Successfully")
})

app.put("/updateStudent/:id",function(req,res){
    id= req.params.id
    name =req.body.name
    for (var i=0;i<students.length;i++)
    {
        if(id ==students[i].id)
             students[i].name=name
    }
    res.end("Updated Successfully")
})

app.listen(2000,()=>{
    console.log("Server Started.....")
})