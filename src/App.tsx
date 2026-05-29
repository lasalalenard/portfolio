import { ThumbnailsCarousel } from "@/components/ui/signature";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0b0f17] text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-5 px-4 py-6 sm:px-6">
        <header className="mx-auto w-full max-w-[920px]">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/80">
            Selected work
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-none text-white sm:text-5xl">
            Portfolio
          </h1>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <ThumbnailsCarousel />
        </section>
      </section>

      <footer className="border-t border-white/10 bg-white/[0.03] px-5 py-8 text-center text-sm text-zinc-400">
        <p>Portfolio</p>
      </footer>
    </main>
  );
}
