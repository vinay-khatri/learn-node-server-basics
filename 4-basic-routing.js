const http = require("http")
const fs = require('fs')

const myFirstServer = http.createServer((req, res) => {
    console.log(req.url, req.method)

    let path = './pages/'

    // Based on Request url we will change path and read the file accordingly.
    switch (req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        default:
            path += '404.html'
            break;
    }

    fs.readFile(path, (err, data) => {
        err ? (console.log(err), res.end()) : res.end(data);
    })
})

myFirstServer.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
