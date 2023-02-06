const http = require('http')

//new callback function
//http://localhost/:5000
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
    res.statusCode = 200;
    return res.end();
})

//http://localhost:5000
server.listen(5000, () => {
    console.log(`Server running at http://localhost:5000`)
});