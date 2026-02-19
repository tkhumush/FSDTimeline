import { useRef, useEffect, useMemo } from "react";
import { fsdReleases } from "../data/fsdReleases";
import TimelineNode from "./TimelineNode";
import TrialBranch from "./TrialBranch";

export default function Timeline() {
  const scrollRef = useRef(null);

  const sorted = useMemo(
    () =>
      [...fsdReleases].sort((a, b) => new Date(a.date) - new Date(b.date)),
    []
  );

  // Scroll to the right end (where trial branch lives) on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollTarget = el.scrollWidth - el.clientWidth * 0.5;
    el.scrollTo({ left: scrollTarget, behavior: "instant" });
  }, []);

  return (
    <div className="timeline-wrapper">
      <div className="timeline-scroll" ref={scrollRef}>
        <div className="timeline-track">
          {/* Horizontal spine */}
          <div className="spine" />

          {/* Stable releases */}
          {sorted.map((release, i) => (
            <TimelineNode key={release.version} release={release} index={i} />
          ))}

          {/* Trial branch forks off here */}
          <TrialBranch />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>&larr;</span> scroll <span>&rarr;</span>
      </div>
    </div>
  );
}
