import { SITE, wa } from "@/lib/data";

// Mobile: fixed bottom bar with WhatsApp + Call. Desktop: floating WhatsApp pill.
export default function WhatsAppBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-cocoa/10 bg-cream/95 p-3 backdrop-blur lg:hidden">
        <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          WhatsApp us
        </a>
        <a href={SITE.phoneHref} className="btn-primary">
          Call
        </a>
      </div>
      <a
        href={wa()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp fixed bottom-6 right-6 z-40 hidden shadow-card lg:inline-flex"
        aria-label="Chat on WhatsApp"
      >
        <span aria-hidden="true">💬</span> WhatsApp us
      </a>
    </>
  );
}
