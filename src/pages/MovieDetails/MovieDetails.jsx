import MovieItem from 'components/MovieItem/MovieItem';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchFilmById } from 'services/api';
import { TiArrowBackOutline } from 'react-icons/ti';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Title } from '../Home/Home.styled';
import { DecoratedLink } from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async id => {
      try {
        const fetchedMovie = await fetchFilmById(id, controller);
        setMovie(fetchedMovie);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData(movieId);
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Container>
      <DecoratedLink to={backLinkLocationRef.current}>
        <TiArrowBackOutline size="20" />
        Go back
      </DecoratedLink>
      {movie && <MovieItem movie={movie} />}
      <Title>Additional information</Title>
      <DecoratedLink to="cast">Cast</DecoratedLink>
      <DecoratedLink to="reviews">Reviews</DecoratedLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
