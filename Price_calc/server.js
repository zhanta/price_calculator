const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
    if(path == "") {
        path = "index.html";
    }
    console.log(`Requested path ${path}`);

    let file = __dirname + "/folder/" + path;

    fs.readFile(file, function(err, content) {
        if(err) {
            console.log(`File not Found ${file}`);
            res.writeHead(404);
            res.end();
        } 
        else {
            console.log(`Returning ${path}`);
            res.setHeader("X-Content-Type-Options", "nosniff");
            //let mime = lookup(path);
            //res.writeHead(200, {"Content-Type": mime});
            switch (path) {
                case "style.css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case "main.js":
                    res.writeHead(200, {"Content-Type": "application/javascript"});
                    break;
                case "index.html":
                    res.writeHead(200, {"Content-Type": "text/html"});
            }
            res.end(content);
        }
    });
});
server.listen(8000, "localhost", () => {
    console.log("Listening on port 8000");
})