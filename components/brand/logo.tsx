import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "color" | "white" | "mono";
  showText?: boolean;
}

export function Logo({
  className,
  variant = "color",
  showText = true,
}: LogoProps) {
  const fillPrimary =
    variant === "white" ? "#ffffff" : variant === "mono" ? "#111827" : "#4F46E5";
  const fillAccent =
    variant === "white" ? "#ffffff" : variant === "mono" ? "#111827" : "#0EA5E9";
  const textColor =
    variant === "white"
      ? "text-white"
      : variant === "mono"
        ? "text-gray-900"
        : "text-gray-900";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        {/* Pin de Maps */}
        <path
          d="M16 2C10.477 2 6 6.477 6 12c0 7.5 10 18 10 18s10-10.5 10-18c0-5.523-4.477-10-10-10z"
          fill={fillPrimary}
        />
        {/* Check dentro del pin */}
        <path
          d="M11 12.5l3.5 3.5L21 9.5"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Punto accent */}
        <circle cx="24" cy="8" r="3" fill={fillAccent} />
      </svg>
      {showText && (
        <span
          className={cn(
            "text-lg font-semibold tracking-tight",
            textColor,
          )}
        >
          LeadScout
        </span>
      )}
    </div>
  );
}
