const fsdReleases = [
  {
    version: "FSD Beta 10.0",
    date: "2021-09-11",
    description:
      "Initial wide FSD Beta release enabling city-street driving with lane changes, turns, and navigation around objects.",
  },
  {
    version: "FSD Beta 10.2",
    date: "2021-10-11",
    description:
      "Released to ~1,000 owners with a perfect 100/100 Safety Score. Upgraded object detection to photon count video streams.",
  },
  {
    version: "FSD Beta 10.3.1",
    date: "2021-10-25",
    description:
      "Emergency fix after v10.3 shipped with critical false AEB at highway speeds. Expanded access to Safety Score 99+ owners.",
  },
  {
    version: "FSD Beta 10.8",
    date: "2021-12-23",
    description:
      "Introduced waypoint support. Tesla Vision-only approach (no radar) continued to mature across the fleet.",
  },
  {
    version: "FSD Beta 10.10.2",
    date: "2022-02-18",
    description:
      "Removed the rolling stop behavior at stop signs following an NHTSA safety recall citing increased crash risk.",
  },
  {
    version: "FSD Beta 10.11.2",
    date: "2022-04-12",
    description:
      "Boosted pedestrian/cyclist detection by 44.9%. Introduced 'Vector Lanes' architecture using a GPT-like Transformer.",
  },
  {
    version: "FSD Beta 10.12.2",
    date: "2022-05-28",
    description:
      "Major broad rollout to 100,000+ vehicles. Improvements for unprotected left turns, heavy traffic, and complex intersections.",
  },
  {
    version: "FSD Beta 10.69.2",
    date: "2022-09-11",
    description:
      "Significant improvements for intersections, unmapped roads, and roundabouts. FSD price increased from $12K to $15K.",
  },
  {
    version: "FSD Beta 10.69.3.1",
    date: "2022-11-20",
    description:
      "FSD Beta extended to all North American owners who purchased the option. Added blind spot camera and alternate routes.",
  },
  {
    version: "FSD Beta 11.3.6",
    date: "2023-04-01",
    description:
      "Landmark 'single stack' release unifying city and highway driving code, replacing the 4-year-old legacy highway stack.",
  },
  {
    version: "FSD Beta 11.4.2",
    date: "2023-05-27",
    description:
      "Refinements on single-stack architecture with improved lane changes and better handling on narrow unmarked roads.",
  },
  {
    version: "FSD Beta 11.4.4",
    date: "2023-06-20",
    description:
      "Broad rollout with improved short-deadline lane changes and 8% better Occupancy Flow prediction for moving obstacles.",
  },
  {
    version: "FSD Beta 11.4.7",
    date: "2023-08-24",
    description:
      "Expanded object detection with improved distant vehicle recall and geometry precision for semi-trucks and trailers.",
  },
  {
    version: "FSD Beta 11.4.9",
    date: "2023-12-15",
    description:
      "Final v11 release with NHTSA recall fixes: larger driver monitoring alerts and stricter attentiveness checks.",
  },
  {
    version: "FSD 12.3",
    date: "2024-03-26",
    description:
      "First wide release of end-to-end neural network, replacing 300K+ lines of C++ with a single neural net. 'Beta' label dropped.",
  },
  {
    version: "FSD 12.3.6",
    date: "2024-04-30",
    description:
      "Iterative improvement with Autopark updates and Tesla Vision Park Assist enhancements. 1 billion cumulative FSD miles reached.",
  },
  {
    version: "FSD 12.4",
    date: "2024-06-15",
    description:
      "Focused on user comfort — reduced hard accelerations and sudden braking. Claimed 5-10x improvement in miles between interventions.",
  },
  {
    version: "FSD 12.5.1",
    date: "2024-08-05",
    description:
      "Unified city and highway into a single end-to-end model. Brought FSD to Cybertruck for the first time.",
  },
  {
    version: "FSD 12.5.2",
    date: "2024-09-15",
    description:
      "Achieved a reported 3x improvement in miles driven without human intervention. Refined unified neural network stack.",
  },
  {
    version: "FSD 12.5.6",
    date: "2024-10-15",
    description:
      "HW4-exclusive release with a model trained specifically on Hardware 4 sensor data and superior camera resolution.",
  },
  {
    version: "FSD 12.5.4.2",
    date: "2024-11-01",
    description:
      "HW3 update with smoother overall driving experience. Notable improvements in ride comfort and path planning.",
  },
  {
    version: "FSD 13.2",
    date: "2024-12-16",
    description:
      "Major overhaul for HW4: complete rewrite of driving network with new 'Parked to Parked' functionality including Auto-Park.",
  },
  {
    version: "FSD 12.6",
    date: "2024-12-30",
    description:
      "End-to-end highway navigation for HW3 for the first time. Added customizable speed profiles and smoother lane changes.",
  },
  {
    version: "FSD 13.2.5",
    date: "2025-01-23",
    description:
      "Continued v13 refinement on HW4 with improved driving smoothness, better intersection handling, and neural net improvements.",
  },
  {
    version: "FSD 13.2.9",
    date: "2025-02-17",
    description:
      "Combined update shipping both FSD 12.6.x (HW3) and 13.2.x (HW4) in a single release, streamlining updates across hardware.",
  },
];

export default fsdReleases;
