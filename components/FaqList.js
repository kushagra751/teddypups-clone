// Accessible accordion using native <details>, no JS needed.
export default function FaqList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((f) => (
        <li key={f.q}>
          <details className="group rounded-3xl bg-white p-5 shadow-card open:bg-peach/60 sm:p-6">
            <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-lg font-bold">
              <span>{f.q}</span>
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-prose text-cocoa">{f.a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}
