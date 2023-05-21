import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { CastItem, CastList, Img } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async id => {
      try {
        const fetchedCast = await fetchCast(id, controller);
        setCast(fetchedCast.cast);
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
    <CastList>
      {cast &&
        cast.map(({ profile_path, name, id }) => (
          <CastItem key={id}>
            {profile_path ? (
              <Img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={`${name}`}
              />
            ) : (
              <div>No photo</div>
            )}
            {name}
          </CastItem>
        ))}
    </CastList>
  );
};
export default Cast;
