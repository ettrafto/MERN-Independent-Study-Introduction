//imports all of express
//import * as express from "express";

import express from "express";
import os from "os";
import config,{PORT} from "./config";
import apiRouter from "./api-router";

console.log({ config });
console.log({ PORT });


const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.get("/",(req,res)=>{
    res.render("index",{
        initialContent: "Loading..."

    });
});

server.listen(config.PORT,config.HOST,()=>{
    console.info(
        `Express server is listening at ${config.SERVER_URL}`,
        `Free Mem: ${os.freemem() / 1024 / 1024}`,
    );
});