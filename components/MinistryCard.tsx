import { Ministry } from "@/types/ministry";
import Button from "@/components/Button";

interface MinistryCardProps {
  ministry: Ministry;
}

export default function MinistryCard({ ministry }: MinistryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 flex flex-col">
      <h3 className="font-bold text-dvb-navy text-lg">{ministry.name}</h3>
      <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-1">
        {ministry.summary}
      </p>
      <div className="mt-5">
        <Button href="/contact" variant="secondary">
          {ministry.cta}
        </Button>
      </div>
    </div>
  );
}
