//import * as express from "express";

import express from "express";
import os from "os";
import config,{PORT} from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";

console.log({ config });
console.log({ PORT });


const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.get("/", async (req,res)=>{
    const {initialMarkup, initialData} = await serverRender()

    res.render("index",{
        initialMarkup,
        initialData,
    });
});

server.listen(config.PORT,config.HOST,()=>{
    console.info(
        `Express server is listening at ${config.SERVER_URL}`,
        `Free Mem: ${os.freemem() / 1024 / 1024}`,
    );
});