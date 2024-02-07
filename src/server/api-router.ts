/*creating an API endpoint*/

import express from "express";
import cors from "cors";

import { connectClient } from "./db"; 

const router = express.Router();
router.use(cors());

//getting only id,categoryName, and ContestName
router.get("/contests", async (req,res) => {
    //here we can get the data from Mongo
    const client = await connectClient();

    //find - gives specific which can return specific contests
    //project - gives specfic fields to array
    const contests = await client.collection("contests")
    .find()
    .project({
        id: 1,
        categoryName: 1,
        contestName: 1,
        _id: 0,
    })
    .toArray();

    res.send({contests});
});

//getting all data for a contest
//syntax for a param in a route: dynamic url
router.get("/contest/:contestId", async (req, res) =>{
    const client = await connectClient();

    const contest = await client
    .collection("contests")
    .findOne({ id: req.params.contestId})

    res.send({ contest })
    
});


export default router