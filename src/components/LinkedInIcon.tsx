import React from "react";

interface LinkedInIconProps {
  className?: string;
}

export function LinkedInIcon({ className }: LinkedInIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M5.34 7.43a2.06 2.06 0 1 0 0-4.12 2.06 2.06 0 0 0 0 4.12ZM3.56 9h3.56v11.45H3.56V9Zm5.78 0h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9Z" />
    </svg>
  );
}
