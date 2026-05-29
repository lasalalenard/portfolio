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
      <Carousel.ItemGroup className="mb-4 overflow-hidden rounded-xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.38)] ring-1 ring-white/10">
        {images.map((image, index) => (
          <Carousel.Item key={image.full} index={index}>
            <img
              src={image.full}
              alt={`Slide ${index + 1}`}
              className="aspect-video max-h-[66vh] w-full object-contain"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="mx-auto flex max-w-[760px] items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md">
        <Carousel.PrevTrigger
          aria-label="Previous slide"
          className="shrink-0 rounded-full bg-white text-zinc-950 p-2 shadow-sm transition hover:bg-cyan-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </Carousel.PrevTrigger>

        <div className="flex max-w-full flex-1 justify-center gap-2 overflow-x-auto px-1">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={image.thumb}
              index={index}
              className="shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-transparent opacity-55 transition-all hover:opacity-100 data-current:border-cyan-300 data-current:opacity-100"
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className="h-10 w-16 object-cover"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger
          aria-label="Next slide"
          className="shrink-0 rounded-full bg-white text-zinc-950 p-2 shadow-sm transition hover:bg-cyan-100"
        >
          <ChevronRight className="h-5 w-5" />
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
