import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import EventCard from "@/components/EventCard";
import { fetchEvents } from "@/lib/api/events";

export const metadata = { title: "Dry Valley Baptist Church" };

export default async function HomePage() {
  const upcomingEvents = (await fetchEvents()).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-dvb-navy text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Welcome to Dry Valley Baptist Church
        </h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
          A Christ-centered family on mission in Dry Valley — come worship, grow,
          and belong.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button href="/visit">Plan Your Visit</Button>
          <Button href="/sermons" variant="secondary">
            Watch Sermons
          </Button>
        </div>
      </section>

      {/* Service Times */}
      <Section className="bg-dvb-sand">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { day: "Sunday School", time: "10:00 AM" },
            { day: "Sunday Worship", time: "11:00 AM" },
            { day: "Wednesday Night", time: "7:00 PM" },
          ].map((s) => (
            <div key={s.day} className="bg-white rounded-lg shadow-card p-6">
              <p className="text-dvb-gold font-bold text-lg">{s.time}</p>
              <p className="mt-1 text-dvb-navy font-semibold">{s.day}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* About blurb */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-dvb-navy">Who We Are</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Dry Valley Baptist Church is a warm, multigenerational congregation
              committed to the gospel of Jesus Christ. We exist to glorify God by
              making disciples who love Jesus, love people, and live on mission in
              our community and beyond.
            </p>
            <div className="mt-6">
              <Button href="/about">Learn More About Us</Button>
            </div>
          </div>
          <div className="bg-dvb-sand rounded-lg p-8">
            <h3 className="font-bold text-dvb-navy text-xl mb-4">We Believe</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2">
                <span className="text-dvb-gold font-bold">✦</span>
                The Bible is the inspired Word of God.
              </li>
              <li className="flex gap-2">
                <span className="text-dvb-gold font-bold">✦</span>
                Salvation comes by grace through faith in Jesus Christ.
              </li>
              <li className="flex gap-2">
                <span className="text-dvb-gold font-bold">✦</span>
                Every believer is called to live on mission.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section className="bg-dvb-sand">
        <h2 className="text-2xl font-bold text-dvb-navy mb-6">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/events" variant="secondary">
            View All Events
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-dvb-navy text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold">Ready to Join Us?</h2>
          <p className="mt-3 text-slate-300">
            We&apos;d love to meet you. Come as you are — there&apos;s a place for you here.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button href="/visit">Plan Your Visit</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
