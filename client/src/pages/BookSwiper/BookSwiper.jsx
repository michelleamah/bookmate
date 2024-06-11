import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookSwiper.scss';

const BookSwiper = () => {
  const [index, setIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { genre } = location.state || {};

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books?genres=${genre}`);
        setBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    if (!genre) {
      navigate('/');
    } else {
      fetchBooks();
    }
  }, [genre, navigate]);

  const handleSwipeRight = () => {
    const matchedBooks = JSON.parse(localStorage.getItem('matchedBooks')) || [];
    matchedBooks.push(books[index]);
    localStorage.setItem('matchedBooks', JSON.stringify(matchedBooks));
    setIndex(index + 1);
  };

  const handleSwipeLeft = () => {
    setIndex(index + 1);
  };

  if (index >= books.length) {
    return <div className="BookSwiper">No more books to display</div>;
  }

  return (
    <div className="BookSwiper">
      <h1>Swipe through Books</h1>
      {books.length > 0 && (
        <div className="book-container">
          <img src={`http://covers.openlibrary.org/b/id/${books[index].cover_id}-L.jpg`} alt={books[index].title} />
          <h2>{books[index].title}</h2>
          <p>{books[index].author}</p>
          <p>{books[index].description}</p>
          <button onClick={handleSwipeLeft}>Not up my alley 💔</button>
          <button onClick={handleSwipeRight}>Want to read ❤️</button>
        </div>
      )}
    </div>
  );
};

export default BookSwiper;
