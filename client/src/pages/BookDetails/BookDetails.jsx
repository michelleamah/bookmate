import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookDetails.scss';

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, { text: comment, rating }]);
      setComment('');
      setRating(0);
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} onClick={() => handleStarClick(i)} style={{ cursor: 'pointer' }}>
          {i < rating ? '⭐️' : '☆'}
        </span>
      );
    }
    return stars;
  };

  if (!book) {
    return <div className="no-book">No book details available</div>;
  }

  return (
    <div className="books">
      <h1 className="books__title">{book.title}</h1>
      <section className="books__details">
        <img className="books__cover" src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`} alt={book.title} />
        <div className="books__flex">
        <div className="books__rating">
          <h2>Rating</h2>
          <div>{renderStars()}</div>
        </div>
        <div className="books__comments">
          <h2>Comments</h2>
          <textarea className="books__box" value={comment} onChange={handleCommentChange} />
          <button className="books__button" onClick={handleAddComment}>Add Comment</button>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                {comment.text} - {comment.rating} ⭐️
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
