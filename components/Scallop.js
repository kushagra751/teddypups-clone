// A row of scalloped semicircle bumps, used to break sections the way the
// reference site does between the header/hero and between dark sections.
// `color` is the color the bumps are cut FROM (i.e. the section this divider sits on).
export default function Scallop({ color = "#fffaf0", flip = false, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`h-6 w-full ${flip ? "scallop-bottom" : "scallop-top"} ${className}`}
      style={{ "--scallop-color": color }}
    />
  );
}
