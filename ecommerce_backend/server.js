import express, { json } from "express";

import { Product, County, Cart } from "./database.js";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
//import Cart from "../ecommerce_frontend/src/Components/Screens/Cart";
//const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
// app.use(helmet());
//app.use(bodyParser.json());
app.use(compression());
app.get("/api/products", async (req, res) => {
  res.send(await Product.find());
});
app.get("/api/deliverylocations", async (req, res) => {
  res.send(await County.find());
});
app.get("/api/cart", async (req, res) => {
  res.send(await Cart.find());
});
app.post("/api/cart", async (req, res) => {
  const { title, price, description, category, image, rating, rate, count } =
    req.body;
  let cart = new Cart({
    title,
    price,
    description,
    category,
    image,
    rating: {
      rate,
      count,
    },
  });
  try {
    await cart.save();
    res.send(cart);
  } catch {}
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server running"));
