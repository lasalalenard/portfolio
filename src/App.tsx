import { ThumbnailsCarousel } from "@/components/ui/signature";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0b0f17] text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-4 px-4 py-4 sm:px-6">
        <header className="mx-auto w-full max-w-[920px]">
          <h1 className="text-3xl font-semibold leading-none text-white sm:text-4xl">
            Portfolio
          </h1>
        </header>

        <section>
          <ThumbnailsCarousel />
        </section>
      </section>

      <footer className="border-t border-white/10 bg-white/[0.03] px-5 py-8 text-center text-sm text-zinc-400">
        <p>Portfolio</p>
      </footer>
    </main>
  );
}
