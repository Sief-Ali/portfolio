import React from "react";

interface CategoryBadgeProps {
  category: string;
  size?: "sm" | "md";
}

export function CategoryBadge({ category, size = "sm" }: CategoryBadgeProps) {
  let colorClasses = "bg-zinc-800/80 text-zinc-300 border-zinc-700/60";
  let dotColor = "bg-zinc-400";

  if (category.includes("Embedded")) {
    colorClasses = "bg-amber-950/40 text-amber-300 border-amber-800/50";
    dotColor = "bg-amber-400";
  } else if (category.includes("Backend") || category.includes("Systems")) {
    colorClasses = "bg-cyan-950/40 text-cyan-300 border-cyan-800/50";
    dotColor = "bg-cyan-400";
  } else if (category.includes("Web")) {
    colorClasses = "bg-emerald-950/40 text-emerald-300 border-emerald-800/50";
    dotColor = "bg-emerald-400";
  } else if (category.includes("Product")) {
    colorClasses = "bg-violet-950/40 text-violet-300 border-violet-800/50";
    dotColor = "bg-violet-400";
  }

  const sizeClasses =
    size === "sm" ? "text-xs px-2.5 py-0.5 gap-1.5" : "text-sm px-3 py-1 gap-2";

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-full border ${colorClasses} ${sizeClasses}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      {category}
    </span>
  );
}
