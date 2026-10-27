export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="animate-fade-up mx-auto max-w-2xl px-6 pb-10 pt-14 text-center md:pt-20">
      <h1 className="font-display text-5xl font-medium text-foreground md:text-6xl">{title}</h1>
      <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
    </header>
  );
}
