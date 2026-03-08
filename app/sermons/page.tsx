import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SermonCard from "@/components/SermonCard";
import { fetchSermons } from "@/lib/api/sermons";

export const metadata = { title: "Sermons | Dry Valley Baptist" };

export default async function SermonsPage() {
  const sermons = await fetchSermons();

  return (
    <>
      <PageHeader title="Sermons" subtitle="Be encouraged by God's Word." />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {sermons.map(s => <SermonCard key={s.id} sermon={s} />)}
        </div>
      </Section>
    </>
  );
}