import { Event } from "@/types/event";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 border-l-4 border-dvb-gold">
      <h3 className="font-bold text-dvb-navy text-xl">{event.title}</h3>
      <div className="mt-3 space-y-1 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-dvb-navy">Date:</span> {event.date}
        </p>
        <p>
          <span className="font-semibold text-dvb-navy">Time:</span> {event.time}
        </p>
        <p>
          <span className="font-semibold text-dvb-navy">Location:</span> {event.location}
        </p>
      </div>
      <p className="mt-4 text-slate-700 text-sm leading-relaxed">{event.summary}</p>
    </div>
  );
}
