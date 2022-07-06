const http = require("http")
const fs = require('fs')

const myFirstServer = http.createServer((request, response) => {
    console.log(request.url, request.method)

    // ******** Headers **********

    // HTTP headers let the client and the server pass additional information with an HTTP request or response.
    // Headers can be used for authentication, cookies, caching, security, client info, proxies, web scokets and much more.
    // Must read : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
    response.setHeader('content-type', 'text/plain')
    // Response body will be treated as plain text even if it has html or css as we have explicitly set the content type.
    // If we don't provide content type, client app will automatically evaluate it but it will effect loading time.

    response.write('<h1> Heading One </h1>')
    response.end()
})


myFirstServer.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
