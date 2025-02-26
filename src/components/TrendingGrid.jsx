import { useState } from 'react';
import { Play, Star } from 'lucide-react';

const trendingMovies = [
  {
    id: 1,
    title: "Deadpool and Wolverine",
    rating: "8.9",
    image: "./trending/images.jpeg"
  },
  {
    id: 2,
    title: "The Boys",
    rating: "8.9", image: "./trending/boys.jpg"
  },
  {
    id: 3,
    title: "Stree 2",
    rating: "8.9",
    image: "./trending/stree2.jpg"
  },
  {
    id: 4,
    title: "The Fall Guy",
    rating: "8.9",
    image: "./trending/fall.jpg"
  },
  {
    id: 5,
    title: "The Witcher",
    rating: "8.9",
    image: "./trending/witcher.jpg"
  },
  {
    id: 6,
    title: "Venom: The Last Dance",
    rating: "8.9",
    image: "./trending/stranger.jpg"
  },
  {
    id: 7,
    title: "Breaking Bad",
    rating: "8.9",
    image: "./trending/breaking.jpg"
  },
  {
    id: 8,
    title: "Wednesday",
    rating: "8.9",
    image: "./trending/wednesday.jpg"
  },
  {
    id: 9,
    title: "Stranger Things",
    rating: "8.9",
    image: "./trending/stranger.jpg"
  }
];

export default function TrendingGrid({ title }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>

      <div className="relative overflow-hidden">
        <div className="flex items-center gap-6 animate-slide">
          {trendingMovies.concat(trendingMovies).map((movie, index) => (
            <div
              key={index}
              className="relative group cursor-pointer min-w-[200px]"
              onMouseEnter={() => setHoveredId(movie.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className={`transform transition-all duration-300 ${hoveredId === movie.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{movie.rating}</span>
                      </div>
                      <button className="p-2 bg-purple-600 rounded-full transform hover:scale-110 transition-transform">
                        <Play className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-black via-gray-950 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black via-gray-950 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}