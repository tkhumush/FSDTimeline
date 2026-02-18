/**
 * Predicts the next FSD release date based on the average interval
 * between all previous releases.
 */
export default function predictNextRelease(releases) {
  if (releases.length < 2) return null;

  const sorted = [...releases].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Calculate intervals between consecutive releases (in ms)
  const intervals = [];
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1].date).getTime();
    const curr = new Date(sorted[i].date).getTime();
    intervals.push(curr - prev);
  }

  const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
  const avgDays = Math.round(avgInterval / (1000 * 60 * 60 * 24));

  const lastDate = new Date(sorted[sorted.length - 1].date);
  const predictedDate = new Date(lastDate.getTime() + avgInterval);

  return {
    date: predictedDate.toISOString().split("T")[0],
    avgDays,
    lastVersion: sorted[sorted.length - 1].version,
    lastDate: sorted[sorted.length - 1].date,
  };
}
