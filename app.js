const http = require ('http')
//1.create a server object
http.createServer((req,res) =>{    
    //1.1 http head
    //Get:http://localhost:5000/
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('Welcome to home page')
        return res.end()
    }
    else if(req.url == '/about'){
        //Get:http://localhost:5000/
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('Welcome to about page')
        return res.end()
    }
    else {
        //Get:http://localhost:5000/xxx
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('NOT FOUND 404')
        return res.end()
    }
}).listen(5000), () => {
    console.log('Running at http://localhost:5000')
}
//2.run server