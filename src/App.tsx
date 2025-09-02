import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Access from './components/Access';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <Menu />
      <Pricing />
      <Testimonials />
      <Access />
      <Footer />
    </div>
  );
}

export default App;
