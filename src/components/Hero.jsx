import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';

/**
 * Hero Section - Main landing section with project title and CTAs
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-800 border border-cyber-500/30 rounded-full mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
          </span>
          <span className="text-sm font-medium text-slate-300">
            In Development - Opinion Builders Program
          </span>
        </div>
        
        {/* Main Title */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in animation-delay-100">
          <span className="text-gradient-cyber">Opinion</span>
          <span className="text-white"> Pulse</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-display font-medium text-cyber-400 mb-6 animate-fade-in animation-delay-200">
          The Pulse of Prediction Markets
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-300">
          Real-time analytics, trading signals, and portfolio tracking for Opinion prediction markets. 
          Make data-driven decisions with professional-grade market intelligence.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
          <a
            href="https://github.com/yourusername/opinion-pulse"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 group"
            aria-label="View project on GitHub"
          >
            <GithubIcon className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>View on GitHub</span>
          </a>
          
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 group"
            aria-label="Follow development on Twitter"
          >
            <TwitterIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Follow Development</span>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;