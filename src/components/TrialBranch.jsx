import { useMemo } from "react";
import { fsdTrialReleases } from "../data/fsdReleases";
import TimelineNode from "./TimelineNode";

export default function TrialBranch() {
  const sorted = useMemo(
    () =>
      [...fsdTrialReleases].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      ),
    []
  );

  return (
    <div className="trial-branch">
      {/* Fork indicator — diagonal line from main spine to branch */}
      <div className="fork-connector">
        <svg viewBox="0 0 60 120" preserveAspectRatio="none">
          <path
            d="M30 120 Q30 60 55 10"
            stroke="var(--trial)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 3"
          />
        </svg>
      </div>

      {/* Branch label */}
      <div className="branch-label">
        <span className="branch-tag">v14 trial</span>
      </div>

      {/* Branch spine + nodes */}
      <div className="branch-track">
        <div className="branch-spine" />
        {sorted.map((release, i) => (
          <TimelineNode
            key={release.version}
            release={release}
            index={i}
            isTrial
            isInternal={release.internal}
          />
        ))}
      </div>
    </div>
  );
}
