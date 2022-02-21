import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import RenderProducts from "../Products/RenderProducts";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "silver" }}>
        <Header />

        <RenderProducts />
      </div>
    </>
  );
};

export default HomeScreen;
