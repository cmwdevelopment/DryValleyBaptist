import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata = { title: "Contact | Dry Valley Baptist" };

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
            <h2 className="text-xl font-bold text-dvb-navy">Send a Message</h2>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dvb-navy"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dvb-navy"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dvb-navy"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="bg-dvb-gold text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-dvb-gold focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
