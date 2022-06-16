var file = require("fs")
file.readFile("file1",function(err,data){
    console.log(data.toString())
})
//file.copyFileSync("file1","file2")
file.writeFile("file1","write in file module",function(err,data){
    console.log("string inserted successfully")
})
file.appendFile("file1"," append in file module",function(err,data){
    console.log("string appended successfully")
})