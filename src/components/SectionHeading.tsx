import React from "react";

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${className}`}>
      {number && (
        <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 block mb-1.5 font-semibold">
          {number}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
