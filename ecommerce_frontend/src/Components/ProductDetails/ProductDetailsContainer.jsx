import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import OrderInfo from "./OrderInfo";

const ProductDetailsContainer = () => {
  return (
    <Container>
      <Row>
        <Col className="p-1 m-1">LINKS</Col>
      </Row>
      <Row>
        <Col lg={3}>
          <ProductImage />
        </Col>
        <Col lg={5}>
          <ProductInfo />
        </Col>
        <Col lg={3}>
          <OrderInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsContainer;
