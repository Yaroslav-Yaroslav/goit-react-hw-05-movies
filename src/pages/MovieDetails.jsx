import MovieItem from 'components/Reviews/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchFilmById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async id => {
      try {
        const fetchedMovie = await fetchFilmById(id);
        console.log('fetchedMovie:', fetchedMovie);
        setMovie(fetchedMovie);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData(movieId);
  }, [movieId]);

  return (
    <>
      {movie && <MovieItem movie={movie} />}
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
export default MovieDetails;
