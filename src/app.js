import express from 'express';
import dotenv from "dotenv";
dotenv.config(); 
import path from 'path';

const PORT = process.env.PORT;
const app = express(); 

app.set("view engine", "pug"); 

app.use(express.static(path.join(__dirname, "/assets"))); 

app.get("/" , (req, res) => {
    res.render("index");
}); 

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
}); 