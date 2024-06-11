import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenreSelection from './pages/GenreSelection/GenreSelection';
import BookSwiper from './pages/BookSwiper/BookSwiper';
import Bookshelf from './pages/Bookshelf/Bookshelf';
import BookDetails from './pages/BookDetails/BookDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/HomePage';
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
