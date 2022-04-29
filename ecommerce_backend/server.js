import express, { json } from "express";

import { Product, County } from "./database.js";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.get("/api/products", async (req, res) => {
  res.send(await Product.find());
});
app.get("/api/deliverylocations", async (req, res) => {
  res.send(await County.find());
});

const port = process.env.port || 5000;
app.listen(port, () => console.log("server running"));
