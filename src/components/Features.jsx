import ChartIcon from './icons/ChartIcon.jsx';
import SignalIcon from './icons/SignalIcon.jsx';
import PortfolioIcon from './icons/temp.jsx';

/**
 * FeatureCard - Individual feature card component
 */
const FeatureCard = ({ icon: Icon, title, description, features, delay }) => {
  return (
    <div 
      className="card-terminal animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-500/20 to-signal-500/20 flex items-center justify-center border border-cyber-500/30 group-hover:border-cyber-500 transition-colors">
          <Icon className="w-6 h-6 text-cyber-400" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <ul className="space-y-2 ml-16">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-slate-300">
            <span className="text-cyber-500 mt-1 flex-shrink-0">▸</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Features Section - Showcase core product features
 */
const Features = () => {
  const features = [
    {
      icon: ChartIcon,
      title: 'Live Market Analytics',
      description: 'Deep market insights powered by real-time data streams',
      features: [
        'Real-time market explorer with advanced filtering',
        'Live orderbook depth visualization',
        'Historical price charts and volume analytics',
        'WebSocket-powered live updates'
      ]
    },
    {
      icon: SignalIcon,
      title: 'Trading Intelligence',
      description: 'Smart alerts and indicators for optimal market timing',
      features: [
        'Custom price alerts and notifications',
        'Market momentum indicators',
        'Spread analysis for optimal execution',
        'Volume surge detection'
      ]
    },
    {
      icon: PortfolioIcon,
      title: 'Portfolio Dashboard',
      description: 'Comprehensive tracking of your positions and performance',
      features: [
        'Real-time P&L tracking across positions',
        'Cost basis and performance analytics',
        'Trade history with insights',
        'Multi-market portfolio view'
      ]
    }
  ];

  return (
    <section id="features" className="relative py-24 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Professional-Grade <span className="text-gradient-cyber">Analytics</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to navigate prediction markets with confidence
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;