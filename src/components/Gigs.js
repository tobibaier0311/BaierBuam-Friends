import React from 'react';
import Card from 'react-bootstrap/Card';
import { events } from './events';

function Gigs() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '50px',
      }}
    >
      {events.map((item) => (
        <Card
          title={item.event}
          border="dark"
          style={{ width: '18rem', margin: '1vw', color: '#002d5c' }}
        >
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
