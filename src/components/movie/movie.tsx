import React from 'react';
import Card from 'react-bootstrap/Card';

 interface Movie {
  title: string;
  year: string;
  poster: string;
}

function Movie(data : Movie) {
  return (
    <div className='movie'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.poster} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.year}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
