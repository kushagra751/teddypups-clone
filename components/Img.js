"use client";

import { useState } from "react";

// Plain <img> with a friendly fallback if a hotlinked image fails to load.
export default function Img({ src, alt = "", className = "", priority = false, ...rest }) {
  const [bad, setBad] = useState(false);

  if (bad) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex items-center justify-center bg-peach text-5xl`}
      >
        🐶
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setBad(true)}
      {...rest}
    />
  );
}
