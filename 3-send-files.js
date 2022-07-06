const http = require("http")
const fs = require('fs')

const myFirstServer = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader('content-type', 'text/html')

    // send files or pages
    fs.readFile('./pages/index.html', (err, data) => {
        err ? (console.log(err), res.end()) : res.end(data);
    })
})

myFirstServer.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
