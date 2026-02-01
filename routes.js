const{readFileContent}=require("./fileReader")

async function handleRequest(req,res){
    try{
        if(req.url==="/file1"){
            const data=await readFileContent("./file1.txt")
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end(data)

        }else if(req.url==="/file2"){
            const data=await readFileContent("./file2.txt")
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end(data)
        }else{
            res.writeHead(400,{"Content-Type":"text/plain"})
            res.end("page not found")

        }

    }catch(error){
        res.writeHead(500,{"Content-Type":"text/plain"})
            res.end("Server error"+error.message);

    }

}
module.exports=handleRequest;