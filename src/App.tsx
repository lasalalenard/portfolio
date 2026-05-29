import { ThumbnailsCarousel } from "@/components/ui/signature";

export default function App() {
  return (
    <main className="min-h-screen bg-[#090d14] text-zinc-50">
      <section className="relative mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center gap-4 px-3 py-4 sm:gap-5 sm:px-6 sm:py-5">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px] sm:bg-[size:auto,56px_56px,56px_56px]" />

        <header className="mx-auto w-full max-w-[920px] text-center">
          <h1 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Sample AI Generated Thumbnails
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-pretty text-xs leading-5 text-zinc-400 sm:text-sm sm:leading-6">
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
