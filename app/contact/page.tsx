import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out any time!"
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-dvb-navy">Get in Touch</h2>
            <ul className="mt-4 space-y-4 text-slate-700">
              <li>
                <span className="font-semibold text-dvb-navy">Address:</span>
                <br />
                1234 Dry Valley Road
                <br />
                Dry Valley, TN 37300
              </li>
              <li>
                <span className="font-semibold text-dvb-navy">Phone:</span>
                <br />
                <a href="tel:+14235550100" className="hover:text-dvb-gold transition-colors">
                  (423) 555-0100
                </a>
              </li>
              <li>
                <span className="font-semibold text-dvb-navy">Email:</span>
                <br />
                <a
                  href="mailto:info@dryvalleybaptist.org"
                  className="hover:text-dvb-gold transition-colors"
                >
                  info@dryvalleybaptist.org
                </a>
              </li>
              <li>
                <span className="font-semibold text-dvb-navy">Office Hours:</span>
                <br />
                Monday – Friday: 9:00 AM – 4:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-dvb-navy mb-4">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
