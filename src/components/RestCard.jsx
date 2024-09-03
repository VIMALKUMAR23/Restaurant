import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RestCard({ resturant }) {
  return (
    <>
      <Link to={`/restaurant_view/${resturant?.id}`} style={{ textDecoration: "none" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"
          />
          <Card.Body>
            <Card.Title className="text-center text-warning" style={{fontSize:"20px"}}>{resturant.name}</Card.Title>
            <Card.Text className="text-center">
              Neighbor Hood:<span className="text-warning ms-3">{resturant.neighborhood}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default RestCard;
