
const http=require("http");
const handleRequest=require("./routes")
const server=http.createServer(handleRequest)
 server.listen(5027,()=>{
    console.log("server is runing on  http://localhost5027")})