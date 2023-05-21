import MovieItem from 'components/Reviews/MovieItem/MovieItem';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchFilmById } from 'services/api';
import { TiArrowBackOutline } from 'react-icons/ti';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fetchData = async id => {
      try {
        const fetchedMovie = await fetchFilmById(id);
        setMovie(fetchedMovie);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData(movieId);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <TiArrowBackOutline size="20" />
        Go back
      </Link>
      {movie && <MovieItem movie={movie} />}
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
export default MovieDetails;
