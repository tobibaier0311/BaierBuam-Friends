import React from 'react';
import Card from 'react-bootstrap/Card';
import { events } from './events';
import '../styles/Gigs.css';

function Gigs() {
  return (
    <div className="Gigs">
      {events.map((item) => (
        <Card className="GigCard" title={item.event} border="dark">
          <Card.Header>{item.date}</Card.Header>
          <Card.Body>
            <Card.Title>{item.event}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Gigs;
