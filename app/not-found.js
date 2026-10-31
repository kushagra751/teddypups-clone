import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="wrap py-28 text-center">
      <p className="font-hand text-6xl text-apricot">oh no…</p>
      <h1 className="h-display mt-2 text-5xl">This pup wandered off</h1>
      <p className="mx-auto mt-4 max-w-md text-cocoa">
        We couldn&apos;t find that page. Let&apos;s get you back to the puppies.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Home</Link>
        <Link href="/puppies" className="btn-ghost">Available puppies</Link>
      </div>
    </div>
  );
}
