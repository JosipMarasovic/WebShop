import React from 'react';
import Card from 'react-bootstrap/Card';
import holder from './holder.png';
import { Link } from 'react-router-dom';

function CardForCategories(props) {
  const { title, id ,thumbnail} = props;

  return (
    <Card>
      <Card.Img variant="top" src={thumbnail} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Exlpore variraty of our products
        </Card.Text>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/items/${id}`} className="btn custom-button">All items</Link>
          <Link to={`/popular/category/${id}`}className="btn custom-button">Popular</Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardForCategories;
