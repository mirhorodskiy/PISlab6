const http = require("https");
const server=http.createServer((res)=>
{
    res.end('<h1>Server</h1>')
}
)
server.listen(3000,()=>
{
    console.log('Server started...')
})