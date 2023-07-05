import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    fetchTrending().then(data => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <main>
      <p>Trending Today</p>
      <MovieList trendingMovies={trendingMovies} />
    </main>
  );
};
export default Home;
