import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingFilms } from 'services/api';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFilms = await fetchTrendingFilms();
        console.log('fetchedFilms:', fetchedFilms);
        setFilms(prevFilms => [...prevFilms, ...fetchedFilms]);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      Home
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
