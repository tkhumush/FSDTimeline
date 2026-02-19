export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>
          FSD <span className="accent">Timeline</span>
        </h1>
        <p className="subtitle">Tesla Full Self-Driving release history</p>
        <div className="legend">
          <span className="legend-item">
            <span className="legend-dot stable" />
            stable
          </span>
          <span className="legend-item">
            <span className="legend-dot trial" />
            v14 trial
          </span>
          <span className="legend-item">
            <span className="legend-dot internal" />
            internal
          </span>
        </div>
      </div>
    </header>
  );
}
