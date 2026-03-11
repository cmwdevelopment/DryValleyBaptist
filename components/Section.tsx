import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
