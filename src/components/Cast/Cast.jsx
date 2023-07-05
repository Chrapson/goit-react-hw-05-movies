import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setMovieCast(data.cast));
  }, [movieId]);
  if (!movieCast) return;

  return (
    <>
      <ul>
        {movieCast.length > 0
          ? movieCast.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : 'no img'
                  }
                  alt="actor"
                  loading="lazy"
                  width="120"
                  height="180"
                />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            ))
          : 'There is no info'}
      </ul>
    </>
  );
};
export default Cast;
