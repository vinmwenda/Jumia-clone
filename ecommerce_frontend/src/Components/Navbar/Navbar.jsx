import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Icons from "../Reusable/Icons";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Search from "./Search";
import gif from "../../static/images/top.gif";

const Navbar = () => {
  const styles = {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="topCont">
            <img src={gif} alt="jumia" />
          </Col>
        </Row>
      </Container>
<div  className=" navContainer">
      <Container   className="p-3 ">
        <Row>
          <Col lg={2} xs={12} className="hover">
            JUMIA
            <AddShoppingCartIcon style={{ margin: "0.5rem", color: "black" }} />
          </Col>
          <Col xs sm lg={6}>
            <Search />
          </Col>
          <Col lg={4} xs={12}>
            <Row>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="none"
                    size="sm"
                    id="dropdown-basic "
                    style={styles}
                  >
                    <Icons Icon={AccountCircleOutlinedIcon} text="Account" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">hello</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="none"
                    size="sm"
                    id="dropdown-basic "
                    style={styles}
                  >
                    <Icons Icon={HelpOutlineOutlinedIcon} text="Help" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">hello</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col id="dropdown-basic " style={styles}>
                <Icons Icon={ShoppingCartOutlinedIcon} text="Cart" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>

      {/* < */}
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <Icons />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <Icons />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <Icons />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </>
  );
};

export default Navbar;
