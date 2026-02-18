import predictNextRelease from "../utils/predictNextRelease";
import fsdReleases from "../data/fsdReleases";

export default function Header() {
  const prediction = predictNextRelease(fsdReleases);
  const predDate = prediction
    ? new Date(prediction.date + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <header className="header">
      <div className="header-left">
        <h1>
          FSD <span className="accent">Timeline</span>
        </h1>
        <p className="subtitle">Tesla Full Self-Driving release history</p>
      </div>
      {prediction && (
        <div className="header-right">
          <span className="prediction-label">Next release prediction</span>
          <span className="prediction-date">{predDate}</span>
          <span className="prediction-meta">
            avg. {prediction.avgDays} days between releases
          </span>
        </div>
      )}
    </header>
  );
}
