import { useEffect, useState } from 'react';
import { NavLink, useParams, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);
  if (!movieDetails) return;
  const {
    original_title,
    poster_path,
    genres,
    vote_average,
    overview,
    release_date,
  } = movieDetails;

  const voteAvgPercent = (vote_average * 10).toFixed(2);
  const year = release_date.split('-')[0];

  const handleClick = () => navigate(-1);
  return (
    <>
      <button type="button" onClick={handleClick}>
        Go Back
      </button>
      <h2>
        {original_title} ({year})
      </h2>
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : ''}
        width={320}
        height={380}
        loading="lazy"
        alt="poster"
      />
      <p>Genres</p>
      {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      <p>{voteAvgPercent}%</p>
      <p>{overview}</p>
      <div>
        <p>Additional Information</p>

        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
