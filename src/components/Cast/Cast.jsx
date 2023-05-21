import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async id => {
      const fetchedCast = await fetchCast(id);
      setCast(fetchedCast.cast);
    };

    fetchData(movieId);
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ profile_path, name, id }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={`${name}`}
              />
            ) : (
              <div>No photo</div>
            )}
            {name}
          </li>
        ))}
    </ul>
  );
};
export default Cast;
