import React , {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

 export interface MovieData {
  id?: number;
  title: string;
  year: string;
  poster: string;
  isMovieInFavorites?: boolean;
}

interface MovieProps {
  data: MovieData; 
}

const Movie : React.FC<MovieProps> = ({ data }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const saveFavoriteMovie = async () => {
    try {
      const movieData = {
        title: data.title,
        year: data.year,
        poster: data.poster,
      };
      await axios.post('http://localhost:4000/movies/favorite', movieData);
      setIsFavorite(true);
    } catch (error) {
      console.error('Error saving favorite movie:', error.message);
    }
  }

    const deleteFavoriteMovie = async () => {
    try {
      await axios.delete(`http://localhost:4000/movies/favorites/${data.id ?? 0}`);
      setIsFavorite(false);
      alert('Movie removed from favorites');
    } catch (error) {
      console.error('Error removing movie from favorites:', error);
    }
  };

useEffect(() => {

    const isMovieInFavorites = async ()  => {
    try {
      const response = await axios.get(`http://localhost:4000/movies/isInFavorites/${data.title}`);
      console.log(response);
      setIsFavorite(response.data);
    } catch (error) {
      console.error('Error..', error.message);
      setIsFavorite(false);
    }
  };

  isMovieInFavorites();
}, [data.title]);

  return (
    <div className='movie'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.poster} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.year}</Card.Text>

          {isFavorite ? 
          <Button variant={"outline-danger"} onClick={deleteFavoriteMovie} > <MdFavorite />  </Button> 
          :
          <Button variant={"outline-success"} onClick={saveFavoriteMovie }> <MdOutlineFavoriteBorder /> </Button>  
          }

        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
