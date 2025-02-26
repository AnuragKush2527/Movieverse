import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Film, TrendingUp, Tv, Grid, Search, User } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTrending = () => {
    const trendingSection = document.getElementById("trending");
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-950/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              MovieVerse
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/movies"
              icon={<Film className="h-4 w-4" />}
              text="Movies"
            />
            <NavLink
              to="/tv-shows"
              icon={<Tv className="h-4 w-4" />}
              text="TV Shows"
            />
            <NavLink
              to="/categories"
              icon={<Grid className="h-4 w-4" />}
              text="Categories"
            />
            <button
              onClick={scrollToTrending}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors group"
            >
              <TrendingUp className="h-4 w-4" />
              <span className="relative">
                Trending
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/auth"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink(props) {
  return (
    <Link
      to={props.to}
      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors group"
    >
      {props.icon}
      <span className="relative">
        {props.text}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
      </span>
    </Link>
  );
}
