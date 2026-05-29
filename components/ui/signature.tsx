import { Carousel } from "@ark-ui/react/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

import generatedImage from "../../assets/gpt-image-2-1.png";
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
];

export function ThumbnailsCarousel() {
  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      className="mx-auto w-full max-w-[min(100%,920px)] p-1"
    >
      <Carousel.ItemGroup className="mb-3 overflow-hidden rounded-lg bg-white shadow-lg">
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
          className="shrink-0 rounded-lg bg-gray-100 p-1.5 text-gray-950 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
        >
          <ChevronLeft className="h-5 w-5" />
        </Carousel.PrevTrigger>

        <div className="flex flex-1 gap-2 overflow-x-auto px-2">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={image.thumb}
              index={index}
              className="shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-transparent transition-all hover:border-gray-300 data-current:border-blue-500"
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
          className="shrink-0 rounded-lg bg-gray-100 p-1.5 text-gray-950 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
        >
          <ChevronRight className="h-5 w-5" />
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
