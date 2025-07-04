import Hero from "../components/hero";
import About from "../components/about";
import FeaturedDestinations from "../components/DestinationItems";
import Testimonials from "../components/Testimonials";
import Footer from "../components/footer";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedDestinations />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
