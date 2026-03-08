import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import EventCard from "@/components/EventCard";
import { fetchEvents } from "@/lib/api/events";

export const metadata = { title: "Events | Dry Valley Baptist" };

export default async function EventsPage() {
  const events = await fetchEvents();

  return (
    <>
      <PageHeader title="Events" subtitle="Join us for what's coming up!" />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </Section>
    </>
  );
}