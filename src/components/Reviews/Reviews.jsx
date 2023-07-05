import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setMovieReviews(data.results));
  }, [movieId]);
  if (!movieReviews) return;

  return (
    <>
      <ul>
        {movieReviews.length
          ? movieReviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))
          : 'There is no reviews'}
      </ul>
    </>
  );
};
export default Reviews;
