import { useState } from "react";

export default function TimelineNode({ release, index, isPrediction }) {
  const [expanded, setExpanded] = useState(false);
  const isTop = index % 2 === 0;

  const dateObj = new Date(release.date + "T00:00:00");
  const dateLabel = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <div
      className={`timeline-node ${isTop ? "top" : "bottom"} ${isPrediction ? "prediction" : ""}`}
      onClick={() => setExpanded((e) => !e)}
    >
      {/* Connector line from node to the spine */}
      <div className="connector" />

      {/* The dot on the spine */}
      <div className="dot" />

      {/* Card */}
      <div className={`card ${expanded ? "expanded" : ""}`}>
        <span className="version">
          {isPrediction ? "PREDICTED" : release.version}
        </span>
        <span className="date">{dateLabel}</span>
        {expanded && (
          <p className="description">
            {isPrediction
              ? `Based on an average interval of ~${release.avgDays} days between releases, the next FSD update is estimated around this date.`
              : release.description}
          </p>
        )}
        {isPrediction && !expanded && (
          <span className="tap-hint">tap for details</span>
        )}
      </div>
    </div>
  );
}
