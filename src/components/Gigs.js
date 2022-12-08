import React from "react";
import Card from "react-bootstrap/Card";

function Gigs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card border="dark" style={{ width: "18rem", margin: "1vw" }}>
        <Card.Header>Samstag, 22.10.2022, 14:00 Uhr</Card.Header>
        <Card.Body>
          <Card.Title>SV Schalding - TSV Dachau</Card.Title>
          <Card.Text>
            Musikalische Unterstützung für den SVS vor, während und nach dem
            Spiel
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Gigs;
