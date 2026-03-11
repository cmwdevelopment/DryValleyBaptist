interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-dvb-navy text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg text-slate-300">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
