import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { routes } from "./Routes/products.routes.js";

const app = new express();
app.use(express.json());
app.use(cors());

app.listen(5200, ()=>{
    console.log("server is running on port 5200")
})

mongoose.connect("mongodb://localhost:27017/shoppyglobe");
const db = mongoose.connection;

db.on("open", ()=>{
    console.log("MongoDb connected successfully")
})
db.on("error", ()=>{
    console.log("MongoDb is not connected successfully")
})

routes(app);