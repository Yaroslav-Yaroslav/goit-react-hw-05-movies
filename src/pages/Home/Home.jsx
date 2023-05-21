import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingFilms } from 'services/api';
import { ItemList, List, Title } from './Home.styled';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedFilms = await fetchTrendingFilms(controller);
        setFilms(prevFilms => [...prevFilms, ...fetchedFilms]);
      } catch (error) {
        console.log('error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container>
      <Title> Trending today</Title>
      {isLoading && <Loader />}
      <List>
        {films.map(({ id, title }) => (
          <ItemList key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </ItemList>
        ))}
      </List>
    </Container>
  );
};
export default Home;
