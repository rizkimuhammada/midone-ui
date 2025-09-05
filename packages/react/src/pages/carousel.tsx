import {
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselItemGroup,
  CarouselItem,
} from "@/components/ui/carousel";

function Main() {
  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`
  );

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <CarouselRoot
            defaultPage={0}
            slideCount={images.length}
            className="size-72"
          >
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselNextTrigger />
            </CarouselControl>
            <CarouselIndicatorGroup>
              {images.map((_, index) => (
                <CarouselIndicator key={index} index={index} />
              ))}
            </CarouselIndicatorGroup>
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  index={index}
                  className="text-5xl bold flex items-center justify-center"
                >
                  {index + 1}
                </CarouselItem>
              ))}
            </CarouselItemGroup>
          </CarouselRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <CarouselRoot
            defaultPage={0}
            slideCount={images.length}
            className="size-72"
          >
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselNextTrigger />
            </CarouselControl>
            <CarouselIndicatorGroup>
              {images.map((_, index) => (
                <CarouselIndicator key={index} index={index} />
              ))}
            </CarouselIndicatorGroup>
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem key={index} index={index}>
                  <img src={image} alt={`Slide ${index}`} />
                </CarouselItem>
              ))}
            </CarouselItemGroup>
          </CarouselRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
