import { Carousel } from "@ark-ui/react/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

import generatedImage from "../../assets/gpt-image-2-1.png";
import newGeneratedImage from "../../assets/gpt-image-2-1 (1).png";
import scaleComparisonImage from "../../assets/img1.png";
import secondScaleComparisonImage from "../../assets/img2.png";

const images = [
  {
    full: scaleComparisonImage,
    thumb: scaleComparisonImage,
  },
  {
    full: secondScaleComparisonImage,
    thumb: secondScaleComparisonImage,
  },
  {
    full: generatedImage,
    thumb: generatedImage,
  },
  {
    full: newGeneratedImage,
    thumb: newGeneratedImage,
  },
];

export function ThumbnailsCarousel() {
  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      className="relative mx-auto w-full max-w-[min(100%,920px)] overflow-hidden rounded-xl border border-white/20 bg-white/10 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl" />

      <Carousel.ItemGroup className="relative mb-3 overflow-hidden rounded-lg border border-white/20 bg-white/90 shadow-lg shadow-black/30">
        {images.map((image, index) => (
          <Carousel.Item key={image.full} index={index}>
            <img
              src={image.full}
              alt={`Slide ${index + 1}`}
              className="aspect-video max-h-[68vh] w-full object-contain"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center gap-3">
        <Carousel.PrevTrigger
          aria-label="Previous slide"
          className="shrink-0 rounded-full border border-white/25 bg-white/15 p-2 text-white shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-white/25"
        >
          <ChevronLeft className="h-5 w-5" />
        </Carousel.PrevTrigger>

        <div className="flex flex-1 gap-2 overflow-x-auto rounded-full border border-white/15 bg-black/20 px-3 py-2 backdrop-blur-xl">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={image.thumb}
              index={index}
              className="shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-white/10 opacity-70 transition-all hover:border-white/50 hover:opacity-100 data-current:border-cyan-300 data-current:opacity-100 data-current:shadow-[0_0_18px_rgba(103,232,249,0.55)]"
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className="h-9 w-12 object-cover"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger
          aria-label="Next slide"
          className="shrink-0 rounded-full border border-white/25 bg-white/15 p-2 text-white shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-white/25"
        >
          <ChevronRight className="h-5 w-5" />
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
