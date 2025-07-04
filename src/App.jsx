import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import PhotoGrid from './components/PhotoGrid';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('Mountain');
  const [title, setTitle] = useState('Mountain Pictures');

  const fetchPhotos = async (searchQuery) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=12`,
        {
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY,
          },
        }
      );
      const data = await response.json();
      setPhotos(data.photos || []);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(query);
    setTitle(`${query.charAt(0).toUpperCase() + query.slice(1)} Pictures`);
  }, [query]);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
  };

  const handleCategorySelect = (category) => {
    setQuery(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
      <header className="text-center py-8">
        <h1 className="text-5xl font-extrabold tracking-tight"> Snap Shot</h1>
      </header>
      <main className="w-full max-w-7xl px-4">
        <SearchBar onSearch={handleSearch} />
        <CategoryButtons onCategorySelect={handleCategorySelect} />
        <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
        {loading ? <LoadingSpinner /> : <PhotoGrid photos={photos} />}
      </main>
      <Footer />
    </div>
  );
}