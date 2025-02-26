import Hero from '../components/Hero';
import MovieCarousel from '../components/MovieCarousel';
import FeaturedCarousel from '../components/FeaturedCarousel';
import TrendingGrid from '../components/TrendingGrid';
import TrendingGrid2 from '../components/TrendingGrid2';
import MovieCarousel2 from '../components/MovieCarousel2';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="pt-16">
        <FeaturedCarousel />
        <div className="space-y-16 pb-12">

          <TrendingGrid title="Trending Now" />
          <MovieCarousel title="All Time Favourites" />
          <TrendingGrid2 title="Most Watched" />


          <MovieCarousel2 title="BollyWood" />
        </div>
      </div>
    </main>
  );
}