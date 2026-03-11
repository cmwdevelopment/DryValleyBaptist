import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="bg-dvb-navy text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link href="/" className="text-xl font-bold tracking-wide text-dvb-gold hover:opacity-90">
          Dry Valley Baptist Church
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-dvb-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
