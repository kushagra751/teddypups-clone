// A small mascot that stays in the corner of the screen as the page is
// scrolled, the way the reference site's running puppy follows you down
// every section. Purely decorative, so it's hidden from assistive tech and
// ignores clicks.
export default function ScrollMascot() {
  return (
    <div
      aria-hidden="true"
      className="mascot-bob pointer-events-none fixed bottom-24 left-3 z-30 select-none text-4xl drop-shadow lg:bottom-8 lg:left-6 lg:text-5xl"
    >
      🐩
    </div>
  );
}
