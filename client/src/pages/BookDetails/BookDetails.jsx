import { useLocation } from 'react-router-dom';
import './BookDetails.scss';

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <div className="no-book">No book details available</div>;
  }

  return (
    <div className="book-details">
      <h1 className="book-title">{book.title}</h1>
      <img className="book-cover" src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`} alt={book.title} />
      <p className="book-author">Author: {book.author}</p>
      <p className="book-sentence">{book.first_sentence}</p>
    </div>
  );
};

export default BookDetails;
