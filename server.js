const http = require("http");
const fs = require("fs");
const url = require("url");

const manel = require("./data");

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    fs.readFile("./index.html", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                console.error(err);
                return res.end("404 Not Found");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`<div><h2>${manel.nombre}</h2><h2>${manel.apellidos}</h2></div>`);
            return res.end();
        });
    }
).listen(8080);
