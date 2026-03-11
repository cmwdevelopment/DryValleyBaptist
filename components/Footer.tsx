export default function Footer() {
  return (
    <footer className="bg-dvb-navy text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm">
        <p className="font-semibold text-dvb-gold">Dry Valley Baptist Church</p>
        <p className="mt-1 text-slate-300">1234 Dry Valley Road · Dry Valley, TN 37300</p>
        <p className="mt-1 text-slate-300">Sunday School 10 AM · Worship 11 AM · Wednesday 7 PM</p>
        <p className="mt-4 text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} Dry Valley Baptist Church. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
