import { Tv } from 'lucide-react';

export default function TvShows() {
  return (
    <div className="pt-16 min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Tv className="h-8 w-8 text-purple-500" />
          <h1 className="text-3xl font-bold">TV Shows</h1>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="group relative rounded-lg overflow-hidden cursor-pointer">
              <img
                src={`https://images.unsplash.com/photo-${1485846234645 + i}-a62644f84728?auto=format&fit=crop&w=300&q=80`}
                alt={`TV Show ${i + 1}`}
                className="w-full aspect-[2/3] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-semibold">TV Show {i + 1}</h3>
                  <p className="text-sm text-gray-300">2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}