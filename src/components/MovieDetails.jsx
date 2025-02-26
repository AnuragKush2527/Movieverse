import { Play, Star, Clock, Calendar, MessageCircle } from 'lucide-react';

export default function MovieDetails() {
  return (
    <div className="pt-16 min-h-screen bg-gray-950">
      <div className="relative">
        {/* Hero Section */}
        <div className="h-[70vh] relative">
          <img
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=2070&q=80"
            alt="Movie Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

          {/* Movie Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">Inception</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>8.8/10</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-1" />
                  <span>148 min</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                  <span>2010</span>
                </div>
                <span className="px-2 py-1 bg-gray-800 rounded-full">PG-13</span>
              </div>

              <button className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all transform hover:scale-105">
                <Play className="h-5 w-5" />
                <span>Watch Trailer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
                <p className="text-gray-300">
                  A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cast</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="text-center">
                      <img
                        src={`https://images.unsplash.com/photo-${1485846234645 + i}-a62644f84728?auto=format&fit=crop&w=300&q=80`}
                        alt="Cast Member"
                        className="w-full aspect-square object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-medium">Actor Name</h3>
                      <p className="text-sm text-gray-400">Character</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Reviews</h2>
                  <button className="text-purple-500 hover:text-purple-400">Write a Review</button>
                </div>
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-gray-900/50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-700" />
                          <span className="font-medium">User Name</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="ml-1">4.5</span>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        Amazing movie with incredible visual effects and a mind-bending plot.
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Details</h2>
                <dl className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <dt className="font-medium">Director</dt>
                    <dd>Christopher Nolan</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Writers</dt>
                    <dd>Christopher Nolan</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Release Date</dt>
                    <dd>July 16, 2010</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Genre</dt>
                    <dd>Action, Sci-Fi, Thriller</dd>
                  </div>
                </dl>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Similar Movies</h2>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="group flex space-x-4 cursor-pointer">
                      <img
                        src={`https://images.unsplash.com/photo-${1440404653325 + i}-ab127d49abc1?auto=format&fit=crop&w=300&q=80`}
                        alt="Similar Movie"
                        className="w-24 h-36 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium group-hover:text-purple-500 transition-colors">Movie Title</h3>
                        <p className="text-sm text-gray-400">2024</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}