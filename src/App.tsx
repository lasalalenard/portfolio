import { ThumbnailsCarousel } from "@/components/ui/signature";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090d14] text-zinc-50">
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-5 px-4 py-5 sm:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />

        <header className="mx-auto w-full max-w-[920px] text-center">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Sample AI Generated Thumbnails
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-zinc-400">
            A compact gallery of concept thumbnails designed for quick review.
          </p>
        </header>

        <section className="mx-auto w-full max-w-[980px]">
          <ThumbnailsCarousel />
        </section>
      </section>

      <footer className="border-t border-white/10 bg-[#090d14] px-5 py-8 text-center text-sm text-zinc-500">
        <p>AI thumbnail concepts</p>
      </footer>
    </main>
  );
}
