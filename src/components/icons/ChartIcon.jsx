/**
 * ChartIcon - Custom candlestick chart icon for analytics feature
 */
const ChartIcon = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Chart analytics icon"
    >
      <title>Chart Analytics</title>
      <desc>Candlestick chart representing market analytics</desc>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="12" y1="6" x2="12" y2="18" strokeWidth="4" />
      <line x1="18" y1="8" x2="18" y2="22" />
      <line x1="18" y1="10" x2="18" y2="20" strokeWidth="4" />
      <line x1="6" y1="2" x2="6" y2="16" />
      <line x1="6" y1="4" x2="6" y2="14" strokeWidth="4" />
    </svg>
  );
};

export default ChartIcon;