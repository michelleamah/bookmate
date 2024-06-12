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

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    localStorage.setItem('matchedBooks', JSON.stringify(updatedBooks));
  };

  return (
    <div className="bookshelf">
      <h1 className="bookshelf__title">Bookshelf</h1>
      <div className="bookshelf__books">
        {books.map((book) => (
          <div key={book.id} className="bookshelf__book">
            <div className="bookshelf__book-info" onClick={() => handleBookClick(book)}>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                alt={book.title}
                className="bookshelf__book-cover"
              />
              <span className="bookshelf__book-title">{book.title}</span>
            </div>
            <button className="bookshelf__delete-button" onClick={() => handleDeleteBook(book.id)}>
              I've read this!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
