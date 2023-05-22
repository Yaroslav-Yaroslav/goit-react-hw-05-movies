import { ContentWrap, FlexWrap, Img } from './MovieItem.styled';
import { Title } from 'pages/Home/Home.styled';
import PropTypes from 'prop-types';
const MovieItem = ({ movie }) => {
  const {
    original_title,
    genres,
    overview,
    vote_average,
    poster_path,
    release_date,
  } = movie;
  return (
    <FlexWrap>
      {poster_path && (
        <Img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="movie poster"
        />
      )}

      <ContentWrap>
        <h2>
          {original_title}({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <Title>Overview</Title>
        <p>{overview}</p>
        <Title>Genres</Title>
        <p>{genres?.map(({ name }) => name).join(', ')}</p>
      </ContentWrap>
    </FlexWrap>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;
