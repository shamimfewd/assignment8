import FeaturedBooks from "../../Components/FeaturedBooks/FeaturedBooks";
import Hero from "../../Components/Header/Hero/Hero";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <FeaturedBooks />
    </div>
  );
};

export default Home;
