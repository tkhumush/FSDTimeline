import { useRef, useEffect, useMemo } from "react";
import fsdReleases from "../data/fsdReleases";
import predictNextRelease from "../utils/predictNextRelease";
import TimelineNode from "./TimelineNode";

export default function Timeline() {
  const scrollRef = useRef(null);

  const sorted = useMemo(
    () =>
      [...fsdReleases].sort((a, b) => new Date(a.date) - new Date(b.date)),
    []
  );

  const prediction = useMemo(() => predictNextRelease(fsdReleases), []);

  // Scroll to center (latest real releases) on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll so the latest release is roughly centered
    const scrollTarget = el.scrollWidth - el.clientWidth * 0.6;
    el.scrollTo({ left: scrollTarget, behavior: "instant" });
  }, []);

  return (
    <div className="timeline-wrapper">
      <div className="timeline-scroll" ref={scrollRef}>
        <div className="timeline-track">
          {/* Horizontal spine */}
          <div className="spine" />

          {sorted.map((release, i) => (
            <TimelineNode key={release.version} release={release} index={i} />
          ))}

          {prediction && (
            <TimelineNode
              release={prediction}
              index={sorted.length}
              isPrediction
            />
          )}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>&larr;</span> scroll <span>&rarr;</span>
      </div>
    </div>
  );
}
