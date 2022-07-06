const http = require("http")
const fs = require('fs')

// Response Status Codes are categoriges in 5 ranges

// 100 Range : information response
// 200 Range : success codes
// 300 Range : redirect codes
// 400 Range : client error codes
// 500 Range : server error codes

const myFirstServer = http.createServer((req, res) => {
    console.log(req.url, req.method)

    let path = './pages/'

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/about-me':
            // Redirecting about-me to about
            res.setHeader('Location', '/about')
            res.statusCode = 301
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err, data) => {
        err ? (console.log(err), res.end()) : res.end(data);
    })
})

myFirstServer.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
