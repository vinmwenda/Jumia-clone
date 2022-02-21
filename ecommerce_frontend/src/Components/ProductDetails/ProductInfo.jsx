import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

const ProductInfo = () => {
  const { title, description, category, price } = useSelector(
    (state) => state.details
  );
  useEffect(() => {
    document.title = { title };
  });
  return (
    <>
      <div>{title}</div>
      <div>Brand:{category}</div>
      <div>Rating</div>
      <div>KSh {price}</div>
      <div>+ Shipping fee KSh 50 to CBD - UON/Globe/KOja/River Road</div>
      <Button
        size="md"
        className="m-1"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "orange",
          border: "none",
        }}
      >
        <span style={{ display: "flex", flex: 1 }}>
          <span style={{ flex: 0.3 }}>
            <AddShoppingCart />
          </span>
          <span>
            {" "}
            <span style={{ flex: 0.7 }}>ADD TO CART</span>
          </span>
        </span>{" "}
      </Button>
    </>
  );
};

export default ProductInfo;
