import { useState, useEffect } from 'react';
import './Bookshelf.scss';
import { useNavigate } from 'react-router-dom';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('matchedBooks')) || [];
    setBooks(storedBooks);
  }, []);

  const handleBookClick = (book) => {
    navigate('/details', { state: { book } });
  };

  const handleClearBookshelf = () => {
    localStorage.removeItem('matchedBooks');
    setBooks([]);
  };

  return (
    <div className="bookshelf-container">
      <h1>Bookshelf</h1>
      <button onClick={handleClearBookshelf}>Clear Bookshelf</button>
      <div className="bookshelf">
        {books.map((book) => (
          <div key={book.id} className="book" onClick={() => handleBookClick(book)}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
              alt={book.title}
              className="book-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
