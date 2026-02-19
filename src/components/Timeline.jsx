import { useRef, useEffect, useMemo } from "react";
import fsdReleases from "../data/fsdReleases";
import TimelineNode from "./TimelineNode";

export default function Timeline({ onSupportClick }) {
  const scrollRef = useRef(null);

  const sorted = useMemo(
    () =>
      [...fsdReleases].sort((a, b) => new Date(a.date) - new Date(b.date)),
    []
  );

  // Scroll to the right end (latest releases) on mount
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

          {sorted.map((release, i) => (
            <TimelineNode key={release.version} release={release} index={i} />
          ))}
        </div>
      </div>

      {/* Scroll hint + support link */}
      <div className="scroll-hint">
        <span>&larr;</span> scroll <span>&rarr;</span>
        <button className="support-link" onClick={onSupportClick}>
          &#9889; support the developer
        </button>
      </div>
    </div>
  );
}
