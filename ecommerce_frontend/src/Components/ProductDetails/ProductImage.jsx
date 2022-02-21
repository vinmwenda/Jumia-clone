import React from "react";
import { useSelector } from "react-redux";

const ProductImage = () => {
  const { image, title } = useSelector((state) => state.details);

  return (
    <>
      <img
        className="p-2"
        style={{ width: "13rem", height: "17rem" }}
        src={image}
        alt={title}
      />
    </>
  );
};

export default ProductImage;
