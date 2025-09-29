export const HamIcon = ({ onClick, className = '' }) => (
  <svg
    className={`hamburger-icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--icon-color)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    onClick={onClick}  // ✅ Forward onClick here
    style={{ cursor: 'pointer' }}  // ✅ Make it clickable visually
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
