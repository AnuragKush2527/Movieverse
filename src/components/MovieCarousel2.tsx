import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Padmavat",
    image: "./slides/padma.jpg"
  },
  {
    id: 2,
    title: "Zindagi Na Milegi Dobara",
    image: "./slides/zinda.jpg"
  },
  {
    id: 3,
    title: "Life of Pi",
    image: "./slides/life.jpg"
  },
  {
    id: 4,
    title: "Chennai Express",
    image: "./slides/chen.jpg"
  },
  {
    id: 5,
    title: "Avengers",
    image: "./slides/3.jpg"
  }
];

export default function MovieCarousel2({ title }: { title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {title}
      </h2>
      <div className="relative group">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="min-w-full px-4 sm:px-6 lg:px-8"
              >
                <div className="relative aspect-[15/4] rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent">
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-bold">{movie.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}