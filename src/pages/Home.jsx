import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingFilms } from 'services/api';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFilms = await fetchTrendingFilms();
        setFilms(prevFilms => [...prevFilms, ...fetchedFilms]);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Home;
