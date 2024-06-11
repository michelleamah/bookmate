import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookSwiper.scss';

const BookSwiper = () => {
  const [index, setIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const [showMatchModal, setShowMatchModal] = useState(false); 
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

  const handleWantToRead = () => {
    setShowMatchModal(true); 
  };

  const handleCloseMatchModal = () => {
    setShowMatchModal(false); 
  };

  if (index >= books.length) {
    return <div className="BookSwiper">No more books to display for today. Come back tomorrow!</div>;
  }

  return (
    <div className="browse">
      <h1 className="browse__discover">Discover</h1>
      {books.length > 0 && (
        <div className="browse__container">
          <img className="browse__image" src={`http://covers.openlibrary.org/b/id/${books[index].cover_id}-L.jpg`} alt={books[index].title} />
          <h2 className="browse__title">{books[index].title}</h2>
          <p className="browse__author">{books[index].author}</p>
          <button className="browse__button" onClick={handleSwipeLeft}>❌</button>
          <button className="browse__button" onClick={handleWantToRead}>✔️</button>
          {showMatchModal && (
            <div className="modal">
              <div className="modal__content">
                <span className="modal__close" onClick={handleCloseMatchModal}>&times;</span>
                <h2>It's a match! ❤️ </h2>
                <p>You've matched with {books[index].title}!</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookSwiper;
