import MongoDB from "./db.js";
import cors from 'cors';

import express from "express";
const app = express();
MongoDB();

app.get('/',(req,res)=>{
    res.send("this is home directory")
})

app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET,POST,PUT,DELETE',  // Allow specific HTTP methods
    credentials: true,               // If you need to send cookies or authorization headers
  }));

  app.get("/foodData", (req, res) => {
    if (global.food_items) {
        res.json(global.food_items);
    } else {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.use(cors());

app.listen(5000,()=>{
    console.log("5000 port working");
})

