import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchRestaurant } from "../redux/restaurantSlice";

function Header() {
  const dispatch = useDispatch();
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
            </div>
          </Link>
          <form action="" className="d-flex ms-auto">
            <input
              onChange={(e) => dispatch(searchRestaurant(e.target.value))}
              type="text"
              className="form-control ms-4 w-100 "
              placeholder="Search by Neigbhorhood"
            />
          </form>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
