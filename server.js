
const http=require("http");
const handleRequest=require("./routes")
const server=http.createServer(handleRequest)
port = 5027
 server.listen(port,()=>{
    console.log("server is runing on  http://localhost5027")})