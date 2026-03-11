export default function Footer() {
  return (
    <footer className="bg-dvb-navy text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm">
        <p className="font-semibold text-dvb-gold">Dry Valley Baptist Church</p>
        <p className="mt-1 text-slate-300">1234 Dry Valley Road · Dry Valley, TN 37300</p>
        <p className="mt-1 text-slate-300">Sunday School 10 AM · Worship 11 AM · Wednesday 7 PM</p>

        {/* Social links */}
        <div className="mt-4 flex justify-center gap-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-slate-400 hover:text-dvb-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.99 22 12z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-slate-400 hover:text-dvb-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        <p className="mt-4 text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} Dry Valley Baptist Church. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
