import React, { useState, useEffect } from 'react';
import { Play, Info, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image: "./movies/inception.jpg",
    rating: 8.8,
    year: 2010,
    duration: "2h 28m",
    certificate: "A"
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "./movies/inter.jpg",
    rating: 8.6,
    year: 2014,
    duration: "2h 49m",
    certificate: "G"
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    rating: 9.0,
    year: 2008,
    duration: "2h 32m",
    certificate: "G"
  },

  {
    id: 4,
    title: "Stranger Things",
    description: "Eleven was a girl with mysterious powers. When a young boy goes missing in Hawkins, Indiana, she helps his friends uncover dark secrets, supernatural creatures, and a parallel world known as the Upside Down.",
    image: "./movies/stranger2.jpg",
    rating: 9.9,
    year: 2016,
    duration: "2h 32m",
    certificate: "G"
  },
  {
    id: 5,
    title: "John Wick",
    description: " John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge.",
    image: "./movies/john.jpg",
    rating: 9.0,
    year: 2014,
    duration: "2h 32m",
    certificate: "NC-17"
  },
  {
    id: 6,
    title: "The Boys",
    description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    image: "./movies/boys9.jpg",
    rating: 8.4,
    year: 2018,
    duration: "2h 32m",
    certificate: "R+"
  },
  {
    id: 7,
    title: "Venom: The Last Dance",
    description: "Eddie and Venom, on the run, face pursuit from both worlds. As circumstances tighten, they're compelled to make a heart-wrenching choice that could mark the end of their symbiotic partnership",
    image: "./movies/venom.jpg",
    rating: 7.3,
    year: 2024,
    duration: "3h 23m",
    certificate: "G"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroMovies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${heroMovies[currentIndex].image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {heroMovies[currentIndex].title}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-yellow-400 flex items-center">

                  <Star className="h-5 w-5 fill-current mr-1" />
                  {heroMovies[currentIndex].rating}
                </span>
                <span className="text-gray-300">{heroMovies[currentIndex].year}</span>
                <span className='text-gray-300'>{heroMovies[currentIndex].duration}</span>
                <span className='font-bold text-gray-300'>{heroMovies[currentIndex].certificate}</span>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                {heroMovies[currentIndex].description}
              </p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all flex items-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Now</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm flex items-center space-x-2"
                >
                  <Info className="h-8 w-8" />
                  <span>More Info</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-purple-500 w-8' : 'bg-gray-500'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;