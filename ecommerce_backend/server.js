import express, { json } from "express";

//const products = require("./productDatabase");
import Products from "./productDatabase.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/api/products", async (req, res) => {
  res.send(await Products.find());
});

const port = process.env.port || 5000;
app.listen(port, () => console.log("server running"));
