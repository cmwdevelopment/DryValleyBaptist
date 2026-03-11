import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-6 py-2.5 rounded font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary:
      "bg-dvb-gold text-white hover:bg-amber-600 focus:ring-dvb-gold",
    secondary:
      "bg-white border border-dvb-navy text-dvb-navy hover:bg-dvb-sand focus:ring-dvb-navy",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
