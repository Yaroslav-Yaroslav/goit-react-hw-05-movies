import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async id => {
      const fetchedReviews = await fetchReviews(id);
      setReviews(fetchedReviews.results);
    };
    fetchData(movieId);
  }, [movieId]);

  if (reviews.length === 0) {
    return <div>We don't have any reviews for this movie </div>;
  } else {
    return (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            {content}
          </li>
        ))}
      </ul>
    );
  }
};
export default Reviews;
