// import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../Reusable/CardItem";
import { data } from "../../static/data/data";
import Col from "react-bootstrap/Col";
import TopSellingItems from "./TopSellingItems";

const TopSellingProducts = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    setProducts(data);
    // const fetchData = async () => {
    //   const { data } = await axios.get("https://fakestoreapi.com/products");
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchData().catch(console.error);
  }, []);
  let electronics= products.filter((product)=>product.category==='electronics')
  let jewelery=products.filter((product)=>product.category==='jewelery')
  let menclothes = products.filter((product)=>product.category==="men's clothing")
  let womenclothes=products.filter((product)=>product.category==="women's clothing")
  return (
    <>
    <span>{TopSellingItems('Top selling',products,"green")}</span>
    <span>{TopSellingItems('Electronics',electronics,'blue')}</span>
    <span>{TopSellingItems('Jewelery',jewelery,'silver')}</span>
    <span>{TopSellingItems('Men clothing',menclothes,'grey')}</span>
    <span>{TopSellingItems('Women clothing',womenclothes,'pink')}</span>
    </>
  );
};

export default TopSellingProducts;
