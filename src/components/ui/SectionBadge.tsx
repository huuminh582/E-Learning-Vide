import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
}

/**
 * Reusable section badge (pill label) used across multiple homepage sections.
 * Example: "Giới thiệu", "Chương trình", "FAQ", "Cam kết", "Liên hệ"
 */
export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
      {children}
    </span>
  );
}
