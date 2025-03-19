import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import Footer from "./components/footer";
import Testimonials from "./components/testimonies";
import FrequentlyAskedQuestions from "./components/faq";
import AboutVidAu from "./components/about";
import HowTo from "./components/howto";

function App() {
  return (
    <section className="w-full">
      <Navbar />

      <HeroSection />

      <AboutVidAu />

      <HowTo />

      <Testimonials />

      <FrequentlyAskedQuestions />

      <Footer />
    </section>
  );
}

export default App;
