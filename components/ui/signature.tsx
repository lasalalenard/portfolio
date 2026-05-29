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
      className="mx-auto w-full max-w-[min(100%,960px)]"
    >
      <Carousel.ItemGroup className="mb-3 overflow-hidden rounded-lg bg-white shadow-[0_24px_70px_rgba(0,0,0,0.34)] ring-1 ring-white/10 sm:mb-4 sm:rounded-xl sm:shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
        {images.map((image, index) => (
          <Carousel.Item key={image.full} index={index}>
            <img
              src={image.full}
              alt={`Slide ${index + 1}`}
              className="aspect-video max-h-[54svh] w-full object-contain sm:max-h-[66vh]"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="mx-auto flex max-w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-2 py-2 backdrop-blur-md sm:max-w-[760px] sm:gap-3 sm:rounded-full sm:px-3">
        <Carousel.PrevTrigger
          aria-label="Previous slide"
          className="shrink-0 rounded-full bg-white p-2 text-zinc-950 shadow-sm transition hover:bg-cyan-100"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Carousel.PrevTrigger>

        <div className="flex max-w-full flex-1 justify-start gap-1.5 overflow-x-auto px-1 sm:justify-center sm:gap-2">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={image.thumb}
              index={index}
              className="shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-transparent opacity-55 transition-all hover:opacity-100 data-current:border-cyan-300 data-current:opacity-100"
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className="h-8 w-12 object-cover sm:h-10 sm:w-16"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger
          aria-label="Next slide"
          className="shrink-0 rounded-full bg-white p-2 text-zinc-950 shadow-sm transition hover:bg-cyan-100"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
