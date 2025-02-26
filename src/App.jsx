import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Categories from './pages/Categories';
import CategoryMovies from './pages/CategoryMovies';
import MovieDetails from './components/MovieDetails';
import Auth from './pages/Auth';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category" element={<CategoryMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;