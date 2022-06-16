var Http=require('http')
var server=Http.createServer(function(req,res){
    res.write("Hello world");
    res.end();
})
server.listen(2000)
console.log("Server started in port 2000");