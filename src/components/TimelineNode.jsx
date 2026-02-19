import { useState } from "react";

export default function TimelineNode({
  release,
  index,
  isTrial,
  isInternal,
}) {
  const [expanded, setExpanded] = useState(false);
  const isTop = isTrial ? true : index % 2 === 0;

  const dateObj = new Date(release.date + "T00:00:00");
  const dateLabel = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  const classes = [
    "timeline-node",
    isTop ? "top" : "bottom",
    isTrial ? "trial" : "",
    isInternal ? "internal" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={() => setExpanded((e) => !e)}>
      {/* Connector line from node to the spine */}
      <div className="connector" />

      {/* The dot on the spine */}
      <div className="dot" />

      {/* Card */}
      <div className={`card ${expanded ? "expanded" : ""}`}>
        {isInternal && <span className="internal-badge">internal</span>}
        {isTrial && !isInternal && (
          <span className="trial-badge">trial</span>
        )}
        <span className="version">{release.version}</span>
        <span className="date">{dateLabel}</span>
        {expanded && (
          <p className="description">{release.description}</p>
        )}
      </div>
    </div>
  );
}
