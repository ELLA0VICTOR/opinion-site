import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';

/**
 * Footer - Site footer with links and attribution
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    project: [
      { name: 'GitHub', url: 'https://github.com/yourusername/opinion-pulse', icon: GithubIcon },
      { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: TwitterIcon }
    ],
    opinion: [
      { name: 'Opinion Labs', url: 'https://www.opinion.trade' },
      { name: 'Documentation', url: 'https://docs.opinion.trade' },
      { name: 'Discord', url: 'https://discord.gg/opinion' }
    ],
    resources: [
      { name: 'Builders Program', url: 'https://www.opinion.trade/builders' },
      { name: 'API Reference', url: 'https://docs.opinion.trade/api' },
      { name: 'SDK Guide', url: 'https://docs.opinion.trade/sdk' }
    ]
  };

  return (
    <footer className="relative border-t border-terminal-600 bg-terminal-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-3">
              <span className="text-gradient-cyber">Opinion</span>
              <span className="text-white"> Pulse</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Professional-grade analytics for Opinion prediction markets. 
              Built with precision for data-driven traders.
            </p>
            <div className="flex items-center gap-3">
              {links.project.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-terminal-700 border border-terminal-600 flex items-center justify-center text-slate-400 hover:text-cyber-400 hover:border-cyber-500 transition-all duration-200"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Opinion Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Opinion Ecosystem</h4>
            <ul className="space-y-2">
              {links.opinion.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Project Status</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
                </div>
                <span className="text-sm text-slate-400">In Active Development</span>
              </div>
              <p className="text-sm text-slate-500">
                Phase 1 of 4 - Market Explorer
              </p>
              <div className="w-full bg-terminal-700 rounded-full h-2 overflow-hidden">
                <div className="bg-cyber-500 h-full rounded-full w-1/4 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-terminal-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Opinion Pulse. Built for the Opinion Builders Program.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with
            
            for the Opinion ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;