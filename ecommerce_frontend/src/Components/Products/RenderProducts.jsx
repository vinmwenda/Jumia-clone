// import axios from "axios";
import React, { useEffect } from "react";
import ProductsContainer from "./ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions";

const RenderProducts = () => {
  const products = useSelector((state) => state.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  let electronics = products.filter(
    (product) => product.category === "electronics"
  );
  let jewelery = products.filter((product) => product.category === "jewelery");
  let menclothes = products.filter(
    (product) => product.category === "men's clothing"
  );
  let womenclothes = products.filter(
    (product) => product.category === "women's clothing"
  );
  const sections = [
    {
      category: "Top selling",
      categoryName: products,
      color: "green",
      id: 1,
    },
    {
      category: " Electronics",
      categoryName: electronics,
      color: "blue",
      id: 2,
    },

    {
      category: "Jewelery",
      categoryName: jewelery,
      color: "silver",
      id: 3,
    },
    { category: "Men Clothing", categoryName: menclothes, color: "grey" },
    { category: "Women Clothing", categoryName: womenclothes, color: "pink" },
  ];
  function renderSections() {
    return sections.map((section) => (
      <span>
        {ProductsContainer(
          section.category,
          section.categoryName,
          section.color
        )}
      </span>
    ));
  }

  return <>{renderSections()}</>;
};

export default RenderProducts;
