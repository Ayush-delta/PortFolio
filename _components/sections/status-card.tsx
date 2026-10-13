export default function StatusCard() {
  return (
    <div className="status-card">
      <div className="status-card-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
          stroke="#e8ff6b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path d="M9.5 2a2.5 2.5 0 1 0 5 0"/>
          <path d="M4 6l1.5 1.5M2 12h2M4 18l1.5-1.5"/>
          <path d="M20 6l-1.5 1.5M22 12h-2M20 18l-1.5-1.5"/>
          <path d="M9 17l-2 4M15 17l2 4"/>
        </svg>
      </div>

      <div className="status-row">
        <p className="status-label">Status</p>
        <div className="status-value">
          <span className="status-dot" />
          Available for full-time &amp; freelance
        </div>
      </div>

      <div className="status-row">
        <p className="status-label">Location</p>
        <div className="status-value">
          <span className="status-pin">📍</span>
          Ranchi, JH 
        </div>
      </div>
    </div>
  );
}
