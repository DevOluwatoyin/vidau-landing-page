import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <section className="w-full bg-primary-100 bg-hero-pattern">
      <Navbar />

      <HeroSection />

      <Footer />
    </section>
  );
}

export default App;
