import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
const CardItem = ({ name, price, image }) => {
  let newName = `${name.substr(0, 20)}...`;
  return (
    <Card className="cardContainer p-0 m-1" style={{ width: "14rem" }}>
      <Card.Img variant="top" className="cardImage" src={image} />
      <Card.Body>
        <Card.Title style={{ fontSize: "15px", flexWrap: "nowrap" }}>
          {newName}
        </Card.Title>
        <Card.Text>
          Ksh <span className="bold">{price}</span>
        </Card.Text>
        {/* <Button variant="primary"></Button> */}
      </Card.Body>
    </Card>
  );
};

export default CardItem;
