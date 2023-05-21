import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/api';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { Button, Form, Input } from './Movies.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { ItemList, List } from 'pages/Home/Home.styled';
const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  useEffect(() => {
    if (searchQuery === '') return;
    const controller = new AbortController();

    const fetchData = async query => {
      try {
        const fetchedMovies = await fetchMovieByQuery(query, controller);
        setMovies(fetchedMovies);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData(searchQuery);
    return () => {
      controller.abort();
    };
  }, [searchQuery]);
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.query.value === '') {
      return toast.error("This didn't work. Please, enter the search");
    }
    setSearchParams({ query: e.target.elements.query.value });
    e.target.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search movies" name="query" />
        <Button type="submit">
          Search
          <BiSearchAlt size="20" />
        </Button>
      </Form>
      {movies && (
        <List>
          {movies.map(({ title, id }) => (
            <ItemList key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </ItemList>
          ))}
        </List>
      )}
      {movies?.length === 0 && <div>There are no movie for this request😇</div>}
    </Container>
  );
};
export default Movies;
