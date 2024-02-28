const h= require('http')
// console.log(h)
port=3000

//localhost:3000

h.createServer((req,res) => {
    res.write("welcome Node js 12")
    res.end()
}).listen(port,()=> console.log("server is running localhost:3000"))
// nodemon for live server