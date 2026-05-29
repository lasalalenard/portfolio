import { ThumbnailsCarousel } from "@/components/ui/signature";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-3 px-4 py-3 sm:px-5">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Project carousel
          </h1>
        </header>

        <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3 shadow-2xl shadow-black/30">
          <ThumbnailsCarousel />
        </section>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-900 px-5 py-8 text-center text-sm text-zinc-400">
        <p>Projects Carousel</p>
      </footer>
    </main>
  );
}
