import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import StaffCard from "@/components/StaffCard";
import { fetchStaff } from "@/lib/api/staff";

export const metadata = { title: "About" };

export default async function AboutPage() {
  const staffMembers = await fetchStaff();
  return (
    <>
      <PageHeader
        title="About Our Church"
        subtitle="A Christ-centered family on mission in Dry Valley."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-dvb-navy">Mission &amp; Vision</h2>
            <p className="mt-3 text-slate-700">
              We exist to glorify God by making disciples who love Jesus, love people,
              and live on mission in our community and beyond.
            </p>
            <h3 className="mt-6 font-semibold text-dvb-navy">Beliefs</h3>
            <p className="mt-2 text-slate-700">
              We hold to historic Christian faith, the authority of Scripture,
              and the transforming power of the gospel.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dvb-navy">Our Story</h2>
            <p className="mt-3 text-slate-700">
              Dry Valley Baptist Church began as a small group of families with a desire
              to build a gospel-centered witness in Dry Valley. Today, we are a growing,
              multigenerational church family committed to worship, discipleship, and service.
            </p>
            <h3 className="mt-6 font-semibold text-dvb-navy">What to Expect</h3>
            <p className="mt-2 text-slate-700">
              Friendly faces, Christ-centered worship, clear biblical teaching,
              and a place where your family can belong.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-dvb-sand">
        <h2 className="text-2xl font-bold text-dvb-navy mb-6">Leadership &amp; Staff</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {staffMembers.map(s => <StaffCard key={s.id} staff={s} />)}
        </div>
      </Section>
    </>
  );
}