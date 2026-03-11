import Button from "@/components/Button";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4">
      <p className="text-8xl font-bold text-dvb-gold">404</p>
      <h1 className="mt-4 text-3xl font-bold text-dvb-navy">Page Not Found</h1>
      <p className="mt-4 text-slate-600 max-w-md leading-relaxed">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
        been moved or may no longer exist.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Button href="/">Return Home</Button>
        <Button href="/contact" variant="secondary">Contact Us</Button>
      </div>
    </section>
  );
}
