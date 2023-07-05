import { Searchbar } from 'components/Searchbar/Searchbar';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearch } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movie') || '';
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMovieList([]);
    fetchSearch(movieName).then(data => {
      if (!data.results.length) {
        setError(true);

        return;
      }
      setError(false);
      setMovieList(data.results);
    });
  }, [movieName]);

  const handleSumbit = value => setSearchParams({ movie: value });
  return (
    <>
      <Searchbar onSubmit={handleSumbit} />
      {error ? <p>No movies here</p> : <MovieList trendingMovies={movieList} />}
    </>
  );
};
export default Movies;
