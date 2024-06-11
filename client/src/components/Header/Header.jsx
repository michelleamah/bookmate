import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
      <Link to="/">
        <h3>BookMate</h3>
      </Link>
    </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Home 🏠</Link></li>
          <li><Link to="/genres">Genres 📑</Link></li>
          <li><Link to="/browse">Browse 🔎 </Link></li>
          <li><Link to="/bookshelf">Bookshelf 📚</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
