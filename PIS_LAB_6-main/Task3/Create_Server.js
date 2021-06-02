const http = require("http");

http.createServer(function(request, response){

    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>New Server</h2>");
    }
    else if(request.url == "/is9305"){
        response.write("<h2>Grom Andrij_2_ІS-93</h2>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }
    response.end();
}).listen(3000);