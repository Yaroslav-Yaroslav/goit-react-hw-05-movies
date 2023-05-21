import { Title } from 'pages/Home/Home.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async id => {
      try {
        const fetchedReviews = await fetchReviews(id, controller);
        setReviews(fetchedReviews.results);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData(movieId);
    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (reviews.length === 0) {
    return <div>We don't have any reviews for this movie </div>;
  } else {
    return (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <Title>{author}</Title>
            {content}
          </li>
        ))}
      </ul>
    );
  }
};
export default Reviews;
