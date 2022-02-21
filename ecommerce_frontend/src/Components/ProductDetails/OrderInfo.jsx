import React from "react";
import jexpress from "../../static/images/jexpress.png";

const OrderInfo = () => {
  return (
    <div>
      <span className="">DELIVERY & RETURNS</span>

      <div>
        {" "}
        <img style={{ width: "10rem" }} src={jexpress} alt="jumia express" />
      </div>
    </div>
  );
};

export default OrderInfo;
