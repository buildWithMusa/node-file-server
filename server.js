
const http=require("http");
const fs=require("fs").promises;
 const server=http.createServer(async(req,res)=>{
    try{
        if(req.url==='/file1'){
            const data=await fs.readFile("file1.txt",'utf8')
            res.writeHead(200,{"Content-Type":'text/plain'});
            res.end(data)
        }else if(req.url==='/file2'){
            const data=await fs.readFile("file2.txt","utf8")
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end(data)
        }else{
            res.writeHead(404,{"Content-Type":"text/plain"})
            res.end("page not found retry later plz")
        }
        
        
    }catch(error){
        res.writeHead(500,{"Content-Type":"text/plain"})
        res.end("Server error")+error.message

    }
    
 })
 server.listen(8000,()=>{
    console.log("server is runing on  http://localhost:8000")
 })