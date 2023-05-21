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
    <div>
      <div>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="movie poster"
          />
        )}
      </div>
      <div>
        <h2>
          {original_title}({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        <p>{genres?.map(({ name }) => name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieItem;
