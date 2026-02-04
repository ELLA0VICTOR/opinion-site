import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

/**
 * App - Main application component
 * Orchestrates all landing page sections
 */
function App() {
  return (
    <div className="min-h-screen bg-terminal-900 text-slate-100">
      <Hero />
      <Features />
      <TechStack />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;