import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/api';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === null) return;
    const fetchData = async query => {
      const fetchedMovies = await fetchMovieByQuery(query);
      setMovies(fetchedMovies);
      console.log('fetchedMovies:', fetchedMovies);
    };
    fetchData(searchQuery);
  }, [searchQuery]);
    const handleSubmit = e => {
      e.preventDefault()
    if (e.target.elements.query.value === '') {
      return toast.error("This didn't work. Please, enter the search");
    }
    setSearchParams({ query: e.target.elements.query.value });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search movies" name="query" />
        <button type="submit">
          Search button <BiSearchAlt size="20" />
        </button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Movies;
