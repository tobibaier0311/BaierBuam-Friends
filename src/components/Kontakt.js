import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Kontakt() {
  return (
    <div
      className="Card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "3vh",
      }}
    >
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>Kontakt BaierBuam and Friends</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Philipp Kohl</ListGroup.Item>
          <ListGroup.Item>
            <a href="mailto:baierbuamandfriends@web.de">
              baierbuamandfriends@web.de{" "}
            </a>{" "}
          </ListGroup.Item>
          <ListGroup.Item>Tel: 0160 7790533</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Kontakt;
