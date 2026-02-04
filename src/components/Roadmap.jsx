/**
 * RoadmapPhase - Individual phase card component
 */
const RoadmapPhase = ({ phase, title, weeks, features, delay, isActive }) => {
  return (
    <div
      className={`relative card-terminal animate-fade-in-up ${
        isActive ? 'border-cyber-500 shadow-lg shadow-cyber-500/20' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Phase number badge */}
      <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-lg border-2 ${
        isActive 
          ? 'bg-cyber-500 text-terminal-900 border-cyber-400' 
          : 'bg-terminal-800 text-cyber-500 border-terminal-600'
      }`}>
        {phase}
      </div>

      <div className="pt-4">
        {/* Title and timeline */}
        <div className="mb-4">
          <h3 className="text-xl font-display font-bold text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-slate-400 font-mono">
            {weeks}
          </p>
        </div>

        {/* Features list */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-300">
              <span className="text-cyber-500 mt-1 flex-shrink-0">◆</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Status indicator */}
        {isActive && (
          <div className="mt-4 pt-4 border-t border-terminal-600">
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-500" />
              </div>
              <span className="text-sm text-cyber-400 font-medium">In Progress</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Roadmap Section - Display development phases and timeline
 */
const Roadmap = () => {
  const phases = [
    {
      phase: 1,
      title: 'Market Explorer',
      weeks: 'Weeks 1-3',
      features: [
        'Market list with filters',
        'Real-time price updates',
        'Basic charting'
      ],
      isActive: true
    },
    {
      phase: 2,
      title: 'Analytics',
      weeks: 'Weeks 4-6',
      features: [
        'Advanced charts',
        'Orderbook visualization',
        'Market screeners'
      ],
      isActive: false
    },
    {
      phase: 3,
      title: 'Portfolio',
      weeks: 'Weeks 7-9',
      features: [
        'Wallet integration',
        'Position tracking',
        'P&L analytics'
      ],
      isActive: false
    },
    {
      phase: 4,
      title: 'Intelligence',
      weeks: 'Weeks 10-12',
      features: [
        'Trading signals',
        'Market insights',
        'Trend detection'
      ],
      isActive: false
    }
  ];

  return (
    <section id="roadmap" className="relative py-24 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Development <span className="text-gradient-cyber">Roadmap</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A 12-week journey to build professional-grade prediction market analytics
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-terminal-600 via-cyber-500/50 to-terminal-600" 
               style={{ top: '2.5rem' }} />
          
          {phases.map((phase, index) => (
            <RoadmapPhase
              key={index}
              {...phase}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Want to follow along or contribute?
          </p>
          <a
            href="https://github.com/yourusername/opinion-pulse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyber-400 hover:text-cyber-300 transition-colors font-medium"
          >
            <span>Star on GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;