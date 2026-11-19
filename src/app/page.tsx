import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
      <section className="max-w-2xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-700">
          Floripa Guide
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Descubre lugares y experiencias en Florianópolis.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Encuentra playas, gastronomía y lugares culturales de Florianópolis
          desde una sola guía.
        </p>
        <Link
          href="/lugares"
          className="mt-8 inline-flex rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white transition hover:bg-sky-800"
        >
          Ver lugares
        </Link>
      </section>
    </main>
  );
}
