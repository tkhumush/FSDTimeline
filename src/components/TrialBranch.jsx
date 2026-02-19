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
      {/* Fork connector — smooth curve from main spine up to branch spine */}
      <div className="fork-connector">
        <svg viewBox="0 0 80 80" preserveAspectRatio="none">
          {/* Main curve: starts on the main spine (bottom-left), curves up to the branch spine (top-right) */}
          <path
            d="M0 80 C40 80, 40 0, 80 0"
            stroke="var(--trial)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Branch label */}
      <div className="branch-label">
        <span className="branch-tag">v14 trial</span>
      </div>

      {/* Branch spine + nodes (all cards above) */}
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
