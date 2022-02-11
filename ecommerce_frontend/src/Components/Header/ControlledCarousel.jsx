import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const items = [
    {
      image: require("../../static/images/image1.png"),
    },
    {
      image: require("../../static/images/image2.png"),
    },
    {
      image: require("../../static/images/image3.png"),
    },
    {
      image: require("../../static/images/image4.png"),
    },
    {
      image: require("../../static/images/image5.png"),
    },
    {
      image: require("../../static/images/image6.png"),
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map((item) => (
        <Carousel.Item key={item.image}>
          <img className="d-block w-100" src={item.image} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
