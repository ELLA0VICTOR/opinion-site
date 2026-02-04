/**
 * TechBadge - Individual technology badge component
 */
const TechBadge = ({ name, category, delay }) => {
  const categoryColors = {
    framework: 'from-cyber-500/20 to-cyber-600/20 border-cyber-500/40 text-cyber-400',
    api: 'from-signal-500/20 to-signal-600/20 border-signal-500/40 text-signal-400',
    tool: 'from-success-500/20 to-success-600/20 border-success-500/40 text-success-400'
  };

  return (
    <div
      className={`px-4 py-2 rounded-lg border bg-gradient-to-br ${categoryColors[category]} 
                  font-mono text-sm font-medium transition-all duration-300 
                  hover:scale-105 hover:shadow-lg animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {name}
    </div>
  );
};

/**
 * TechStack Section - Display technologies used in the project
 */
const TechStack = () => {
  const technologies = [
    { name: 'React 19', category: 'framework' },
    { name: 'Vite', category: 'framework' },
    { name: 'Tailwind CSS 3', category: 'framework' },
    { name: 'Opinion Open API', category: 'api' },
    { name: 'Opinion WebSocket', category: 'api' },
    { name: 'Opinion CLOB SDK', category: 'tool' }
  ];

  return (
    <section id="tech-stack" className="relative py-24 px-6 bg-terminal-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Built with <span className="text-gradient-signal">Modern Tech</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Leveraging cutting-edge tools and Opinion's powerful infrastructure
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <TechBadge
              key={index}
              name={tech.name}
              category={tech.category}
              delay={index * 50}
            />
          ))}
        </div>

        {/* Decorative code snippet */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-terminal-900 border border-terminal-600 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-signal-500" />
              <div className="w-3 h-3 rounded-full bg-success-500" />
              <div className="w-3 h-3 rounded-full bg-cyber-500" />
            </div>
            <pre className="text-slate-300">
              <code>
                <span className="text-signal-400">import</span> {'{'}  <span className="text-cyber-400">OpinionSDK</span> {'}'} <span className="text-signal-400">from</span> <span className="text-success-400">'@opinion/sdk'</span>;
                {'\n\n'}
                <span className="text-slate-500">// Initialize Opinion connection</span>
                {'\n'}
                <span className="text-signal-400">const</span> <span className="text-white">sdk</span> = <span className="text-signal-400">new</span> <span className="text-cyber-400">OpinionSDK</span>();
                {'\n'}
                <span className="text-signal-400">const</span> <span className="text-white">markets</span> = <span className="text-signal-400">await</span> sdk.<span className="text-cyber-400">getMarkets</span>();
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;