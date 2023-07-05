import { Link } from 'react-router-dom';

export const MovieList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies &&
        trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};
