import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
//import Header from "./Components/Header";
import Navbar from "./Components/Navbar/Navbar";
import TopSellingItems from "./Components/Products/TopSellingItems";
import TopSellingProducts from "./Components/Products/TopSellingProducts";
// import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <Navbar />
      <div style={{backgroundColor:'silver'}}>
      <Header />
      <TopSellingProducts />
      </div>
    </>
  );
}

export default App;
