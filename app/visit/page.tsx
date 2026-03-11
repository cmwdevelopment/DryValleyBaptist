import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata = { title: "Plan Your Visit" };

export default function VisitPage() {
  return (
    <>
      <PageHeader title="Plan Your Visit" subtitle="We'd love to meet you!" />

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-dvb-navy">Service Times</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li><strong>Sunday School:</strong> 10:00 AM</li>
              <li><strong>Sunday Worship:</strong> 11:00 AM</li>
              <li><strong>Wednesday Night:</strong> 7:00 PM</li>
            </ul>

            <h2 className="text-xl font-bold text-dvb-navy mt-8">Location</h2>
            <p className="mt-3 text-slate-700">
              Dry Valley Baptist Church<br />
              1234 Dry Valley Road<br />
              Dry Valley, TN 37300
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dvb-navy">What to Expect</h2>
            <p className="mt-3 text-slate-700">
              Come as you are. You'll find a warm welcome, Christ-centered worship,
              and biblical teaching. Children's programs are available during every service.
            </p>
            <div className="mt-6">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-dvb-sand">
        <h2 className="text-xl font-bold text-dvb-navy mb-4">Find Us</h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-card">
          <iframe
            title="Dry Valley Baptist Church Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-85.2!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDry+Valley+Baptist+Church!5e0!3m2!1sen!2sus!4v1600000000000"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}