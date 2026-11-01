// A dashed arc with a plane travelling along it, used on the "Imported for
// you" / "Order upon request" sections (Korea -> Dubai) on the reference
// site. Uses CSS motion-path; the plane simply sits at the start in browsers
// that don't support it, which still reads fine.
const PATH = "M20,80 Q150,-6 280,80";

export default function FlightPath({ from = "Korea", to = "Dubai" }) {
  return (
    <div className="relative mx-auto h-24 w-[300px] max-w-full" aria-hidden="true">
      <svg viewBox="0 0 300 100" className="absolute inset-0 h-full w-full overflow-visible">
        <path d={PATH} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" className="text-cream/50" />
      </svg>
      <span className="absolute left-0 top-[70%] text-xs font-bold text-cream/80">{from}</span>
      <span className="absolute right-0 top-[70%] text-xs font-bold text-cream/80">{to}</span>
      <span
        className="plane-fly absolute text-2xl"
        style={{ offsetPath: `path('${PATH}')`, offsetRotate: "auto" }}
      >
        ✈️
      </span>
    </div>
  );
}
