import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import MinistryCard from "@/components/MinistryCard";
import { fetchMinistries } from "@/lib/api/ministries";

export const metadata = { title: "Ministries" };

export default async function MinistriesPage() {
  const ministries = await fetchMinistries();

  return (
    <>
      <PageHeader title="Ministries" subtitle="Get involved and grow together." />
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {ministries.map(m => <MinistryCard key={m.id} ministry={m} />)}
        </div>
      </Section>
    </>
  );
}