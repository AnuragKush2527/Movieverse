import { Film, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                MovieVerse
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your ultimate destination for movies and TV shows.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/movies" className="hover:text-white transition-colors">Movies</Link></li>
              <li><Link to="/tv-shows" className="hover:text-white transition-colors">TV Shows</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/trending" className="hover:text-white transition-colors">Trending</Link></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Legal
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Connect with us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <br />
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Developed by
            </h3>
            <div className='flex space-x-4 '>

              <a href="https://www.instagram.com/ojaskumargupta/"><img className='h-10 w-10 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_3px_rgba(128,90,213)]' src="https://media.licdn.com/dms/image/v2/D4D03AQHJ8v8ZMCkyoA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722516698542?e=1736985600&v=beta&t=wWGSvpo30M37HjxIexrsSFEsDitQcsl6Fd4_pWwenyI" alt="" /></a>
              <a href="https://www.instagram.com/anurag_kush2503/"><img className='h-10 w-10  rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_3px_rgba(128,90,213)]' src="https://media.licdn.com/dms/image/v2/D5603AQGm8ap_4MrkZg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730541307683?e=1736985600&v=beta&t=26JKVAQrUvy3qvEaT8p64a2gVBojeZeahGvEXHD53Ew" alt="" /></a>


            </div>

          </div>

        </div>


        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MovieVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}