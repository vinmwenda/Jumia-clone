//const mongoose = require("mongoose");
import mongoose from "mongoose";
import { data } from "./dummy.js";
let cloudUrl =
  "mongodb+srv://jumia-cloe:kIi9BPTyIHgotXP6@jumia-clone.7ovll.mongodb.net/jumia-clone?retryWrites=true&w=majority";
const localUrl =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
mongoose
  .connect(cloudUrl)
  .then(() => console.log("connected to database"))
  .catch((err) => console.error("could not connect", err));

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  date: { type: Date, default: Date.now },
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const locationSchema = new mongoose.Schema({
  name: String,
  code: Number,
  areaSQKm: Number,
  capital: Array,
});
export const Product = mongoose.model("product", productSchema);
export const County = mongoose.model("county", locationSchema);

// data.map((item) => {
//   async function createCounty() {
//     const county = new County({
//       name: item.name,
//       code: item.code,
//       areaSQKm: item.areaSQKm,
//       capital: item.capital,
//     });
//     const result = await county.save();
//   }
//   createCounty();
// });

// data.map((item) => {
//   async function createProduct() {
//     const product = new Product({
//       title: item.title,
//       price: item.price,
//       description: item.description,
//       category: item.category,
//       image: item.image,
//       rating: {
//         rate: item.rating.rate,
//         count: item.rating.count,
//       },
//     });
//     const result = await product.save();
//     console.log(result);
//   }

//   createProduct();
// });
