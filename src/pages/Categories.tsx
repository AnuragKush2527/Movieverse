import { Grid, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Action', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Comedy', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80' },
  { name: 'Drama', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Horror', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80' },
  { name: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=600&q=80' },
  { name: 'Romance', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80' }
];

export default function Categories() {
  return (
    <div className="pt-16 min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Grid className="h-8 w-8 text-purple-500" />
          <h1 className="text-3xl font-bold">Categories</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              to={`/category/${category.name.toLowerCase()}`}
              key={category.name}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="aspect-video relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40">
                  <div className="absolute inset-0 flex items-center justify-between p-6">
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <ChevronRight className="h-6 w-6 text-purple-500 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}