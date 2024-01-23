//imports all of express
//import * as express from "express";

import express from "express";

const server = express()

server.use(express.static("dist"));

server.use("/",(req,res)=>{
    res.send("Hello Express");
});

server.listen("8080","0.0.0.0",()=>{
    console.info(
        "Express server is listening at http://0.0.0.0:8080"
    );
});