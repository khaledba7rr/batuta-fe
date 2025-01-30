import React , { useState , useEffect } from 'react';
import Movie, { MovieData } from '../../components/movie/movie.tsx';

import axios from 'axios';

function Favorites() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const fetchFavoriteMovies = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/movies/favorites`);

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
   fetchFavoriteMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

    if (error) {
    return <div>Error searching for movies...</div>;
  }

  return (
    <div className='container'>

        <h1 className='text-center'>Favorite movies ... </h1>

        <div className='movies-container'>

        {movies.map((movie) => (
          <Movie key={movie.title} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
