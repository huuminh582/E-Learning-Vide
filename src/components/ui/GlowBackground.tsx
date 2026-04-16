import React from 'react';

interface GlowBlob {
  /** Tailwind position classes, e.g. "-top-40 -left-40" */
  position: string;
  /** Tailwind size classes, e.g. "w-[500px] h-[500px]" */
  size: string;
  /** Tailwind bg color class, e.g. "bg-accent/[0.06]" */
  color: string;
}

interface GlowBackgroundProps {
  blobs: GlowBlob[];
}

/**
 * Reusable decorative glow background blobs used across sections.
 * Renders absolutely-positioned blurred circles for ambient lighting effects.
 */
export default function GlowBackground({ blobs }: GlowBackgroundProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {blobs.map((blob, idx) => (
        <div
          key={idx}
          className={`absolute ${blob.position} ${blob.size} ${blob.color} rounded-full blur-3xl`}
        />
      ))}
    </div>
  );
}
