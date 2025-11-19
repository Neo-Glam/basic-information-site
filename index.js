const http = require("http");
const fs = require("fs");
const { error } = require("console");
const port = 3000;

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Error: page not found");
      }
      res.write(data);
      res.end();
    });
  } else if(req.url === "/about.html"){
    res.writeHead(301, { "Content-Type": "text/html" });
    fs.readFile("about.html", (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Error: page not found");
      }
      res.write(data);
      res.end();
    });
  }else if(req.url === "/contact-me.html"){
    res.writeHead(301, { "Content-Type": "text/html" });
    fs.readFile("contact-me.html", (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Error: page not found");
      }
      res.write(data);
      res.end();
    });
  }else{
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("404.html", (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Error: page not found");
      }
      res.write(data);
      res.end();
    });
  }
});
/*   fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: page not found");
    } else {
      res.write(data);
      res.end();
    }
  }); */

server.listen(port, function (error) {
  if (error) {
    console.log("probleme !!", error);
  } else {
    console.log("le serveur a demare sur le port:", port);
  }
});
