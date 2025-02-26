import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src=""
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Dune: Part Two
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all transform hover:scale-105">
              <Play className="h-5 w-5" />
              <span>Watch Now</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-full transition-all transform hover:scale-105">
              <ChevronRight className="h-5 w-5" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}