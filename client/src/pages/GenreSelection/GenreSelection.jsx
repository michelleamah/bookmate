import { useNavigate } from 'react-router-dom';
import './GenreSelection.scss';

const genresList = [
  { display: 'Fiction 📖', value: 'Fiction' },
  { display: 'Non-Fiction 📚', value: 'Non-Fiction' },
  { display: 'Science Fiction 🚀', value: 'Science Fiction' },
  { display: 'Fantasy 🧙‍♂️', value: 'Fantasy' },
  { display: 'Mystery 🕵️‍♀️', value: 'Mystery' },
  { display: 'Romance 💖', value: 'Romance' },
  { display: 'Thriller 🗡️', value: 'Thriller' },
  { display: 'Horror 👻', value: 'Horror' }
];

const GenreSelection = () => {
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    navigate('/browse', { state: { genre } });
  };

  return (
    <div className="genre-selection">
      <h1>Select a Genre to Discover Books</h1>
      <div className="genre-list">
        {genresList.map((genre) => (
          <button key={genre.value} onClick={() => handleGenreClick(genre.value)} className="genre-button">
            {genre.display}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
