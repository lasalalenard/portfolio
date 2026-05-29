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
      className="mx-auto w-full max-w-[min(100%,920px)]"
    >
      <Carousel.ItemGroup className="mb-3 overflow-hidden rounded-md bg-white">
        {images.map((image, index) => (
          <Carousel.Item key={image.full} index={index}>
            <img
              src={image.full}
              alt={`Slide ${index + 1}`}
              className="aspect-video max-h-[70vh] w-full object-contain"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center justify-center gap-3">
        <Carousel.PrevTrigger
          aria-label="Previous slide"
          className="shrink-0 rounded-full bg-white/10 p-2 text-zinc-100 transition hover:bg-white/20"
        >
          <ChevronLeft className="h-5 w-5" />
        </Carousel.PrevTrigger>

        <div className="flex max-w-full gap-2 overflow-x-auto px-2 py-1">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={image.thumb}
              index={index}
              className="shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-transparent opacity-60 transition-all hover:opacity-100 data-current:border-cyan-300 data-current:opacity-100"
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
          className="shrink-0 rounded-full bg-white/10 p-2 text-zinc-100 transition hover:bg-white/20"
        >
          <ChevronRight className="h-5 w-5" />
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
