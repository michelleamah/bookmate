import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenreSelection from './pages/GenreSelection/GenreSelection.jsx';
import BookSwiper from './pages/BookSwiper/BookSwiper.jsx';
import Bookshelf from './pages/Bookshelf/Bookshelf.jsx';
import BookDetails from './pages/BookDetails/BookDetails.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/HomePage/HomePage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genres" element={<GenreSelection />} />
            <Route path="/browse" element={<BookSwiper />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/details" element={<BookDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
