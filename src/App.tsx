import { ThumbnailsCarousel } from "@/components/ui/signature";

export default function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#155e75_0,_transparent_34%),radial-gradient(circle_at_bottom_right,_#7c3aed_0,_transparent_28%),#09090b] text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-3 px-4 py-3 sm:px-5">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Project carousel
          </h1>
        </header>

        <section className="rounded-xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
          <ThumbnailsCarousel />
        </section>
      </section>

      <footer className="border-t border-white/10 bg-black/30 px-5 py-8 text-center text-sm text-zinc-300 backdrop-blur-xl">
        <p>Projects Carousel</p>
      </footer>
    </main>
  );
}
