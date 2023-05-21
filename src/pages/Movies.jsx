import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/api';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  useEffect(() => {
    if (searchQuery === '') return;
    const fetchData = async query => {
      try {
        const fetchedMovies = await fetchMovieByQuery(query);
        setMovies(fetchedMovies);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData(searchQuery);
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
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search movies" name="query" />
        <button type="submit">
          Search button <BiSearchAlt size="20" />
        </button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {movies?.length === 0 && <div>There are no movie for this request😇</div>}
    </>
  );
};
export default Movies;
