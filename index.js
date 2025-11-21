const express = require("express");
const app = express();
const PORT = 8080;

app.get("/",(req,res)=>{ res.sendFile(__dirname+"/index.html")})
app.get("/about.html",(req,res)=>{ res.sendFile(__dirname+"/about.html")})
app.get("/contact-me.html",(req,res)=>{ res.sendFile(__dirname+"/contact-me.html")})
app.use((req,res)=>{
  res.status(404).sendFile(__dirname+"/404.html")
})

app.listen(PORT, function (error) {
  if (error) {
    throw error;
  } else {
    console.log("le serveur est ouvert sur le port:", PORT);
  }
});


/* const http = require("http");
const fs = require("fs"); */

/* const server = http.createServer(function (req, res) {
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
}); */

