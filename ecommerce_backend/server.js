import express, { json } from "express";

//const products = require("./productDatabase");
import Products from "./productDatabase.js";
import cors from "cors";

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions));

app.get("/api/products", async (req, res) => {
  res.send(await Products.find());
});

const port = process.env.port || 5000;
app.listen(port, () => console.log("server running"));
