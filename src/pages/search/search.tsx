import React , { useState , useEffect } from 'react';
import Movie from '../../components/movie/movie.tsx';

import axios from 'axios';

import { useParams } from 'react-router-dom';

import './search.scss';

function Search() {

 interface Movie {
  title: string;
  year: string;
  poster: string;
}

  const { movieTitle } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const searchMovies = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/movies/search`, {
        params: { query : movieTitle },
      });

      setMovies(response.data);
      setLoading(false);
      console.log("Movies:", response.data);

    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
   searchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

    if (error) {
    return <div>Error searching for movies...</div>;
  }

  return (
    <div className='container'>

        <h1 className='text-center'>Search Results for : {movieTitle}</h1>

        <div className='movies-container'>

        {movies.map((movie) => (
          <Movie key={movie.title} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
