const fs=require("fs").promises
async function readFileContent(filename) {

    return await fs.readFile(filename,"utf8")
}
module.exports={readFileContent}