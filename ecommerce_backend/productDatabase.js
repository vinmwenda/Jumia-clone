//const mongoose = require("mongoose");
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1/jumia_clone")
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
const Product = mongoose.model("Product", productSchema);
export default Product;

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
