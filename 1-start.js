const http = require("http")
const fs = require('fs')

// To start a nodejs web server first we have to create it and listen to it.
// To create a server nodejs provides createServer() method in http module.
// http.createServer([options][, requestListener])
// It returns a new instace of http server.

// The requestListener function is passed as a parameter to the http.createServer() method.
// The Request Listener Callback is executed each time server gets a request.
// The requestListener function handles requests from the user, and also the response back to the user.
const myFirstServer = http.createServer((request, response) => {

    // http Request : we receive from client
    console.log(request.url, request.method)

    // http Response : we send to client 
    response.write('<h1> Hello World </h1>')
    response.write('<p> My Server is Up and Running </p>')
    // response.write(chunk[, encoding][, callback])
    // write() sends a chunk of the response body. This method may be called multiple times to provide successive parts of the body.
    // Must read : https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback

    response.end()
    // response.end([data[, encoding]][, callback])
    // response.end() method signals to the server that all of the response headers and body have been sent;
    // The method, response.end(), MUST be called on each response otherwise client will keep waiting for more response.
    // We can also send response body directly in end(), If callback is specified, it will be called when the response stream is finished.
})


// *********** Listener *************

// The server.listen() method creates a listener for the server on the specified port or path.
myFirstServer.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})

// NOTE : We have to restart the server if we have made any changes on server side.
// Or we can use npm package nodemon for autorestart.