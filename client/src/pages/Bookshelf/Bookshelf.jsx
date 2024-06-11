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
    <div className="bookshelf">
      <h1 className="bookshelf__title">Bookshelf</h1>
      <div className="bookshelf__books">
        {books.map((book) => (
          <div key={book.id} className="bookshelf__titles" onClick={() => handleBookClick(book)}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
              alt={book.title}
              className="bookshelf__covers"
            />
          </div>
        ))}
      </div>
      <button className="bookshelf__clear" onClick={handleClearBookshelf}>Clear Bookshelf</button>
    </div>
  );
};

export default Bookshelf;
