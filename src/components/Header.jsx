import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar variant="dark mt-3">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none", overflowY: "hidden" }}>
            <div className="d-flex justify-content-between align-items-center">
              <Navbar.Brand>
                <img
                  alt=""
                  src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
                  width="30"
                  height="30"
                  className="d-inline-block align-top me-3"
                />{" "}
                Food <span className="text-warning">Circle</span>
              </Navbar.Brand>
              <input type="text" className="form-control ms-5 w-100" placeholder="Search by Neibhorhood" />
            </div>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
