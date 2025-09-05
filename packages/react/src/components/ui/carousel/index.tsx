import { Carousel } from "@ark-ui/react/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import {
  carouselRoot,
  carouselControl,
  carouselPrevTrigger,
  carouselNextTrigger,
  carouselIndicatorGroup,
  carouselIndicator,
  carouselItemGroup,
  carouselItem,
} from "@midoneui/core/styles/carousel.styles";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Box } from "../box";

export function CarouselRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Carousel.Root>) {
  return (
    <Carousel.Root className={cn(carouselRoot, className)} {...props}>
      {children}
    </Carousel.Root>
  );
}

export function CarouselControl({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Carousel.Control>) {
  return (
    <Carousel.Control className={cn(carouselControl, className)} {...props}>
      {children}
    </Carousel.Control>
  );
}

export function CarouselPrevTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Carousel.PrevTrigger>) {
  return (
    <Carousel.PrevTrigger asChild {...props}>
      <Button className={cn(carouselPrevTrigger, className)}>
        {children ?? <ArrowLeft />}
      </Button>
    </Carousel.PrevTrigger>
  );
}

export function CarouselNextTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Carousel.NextTrigger>) {
  return (
    <Carousel.NextTrigger asChild {...props}>
      <Button className={cn(carouselNextTrigger, className)}>
        {children ?? <ArrowRight />}
      </Button>
    </Carousel.NextTrigger>
  );
}

export function CarouselIndicatorGroup({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Carousel.IndicatorGroup>) {
  return (
    <Carousel.IndicatorGroup
      className={cn(carouselIndicatorGroup, className)}
      {...props}
    >
      {children}
    </Carousel.IndicatorGroup>
  );
}

export function CarouselIndicator({
  className,
  ...props
}: React.ComponentProps<typeof Carousel.Indicator>) {
  return (
    <Carousel.Indicator
      className={cn(carouselIndicator, className)}
      {...props}
    />
  );
}

export function CarouselItemGroup({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Carousel.ItemGroup>) {
  return (
    <Carousel.ItemGroup className={cn(carouselItemGroup, className)} {...props}>
      {children}
    </Carousel.ItemGroup>
  );
}

export function CarouselItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Carousel.Item>) {
  return (
    <Carousel.Item asChild {...props}>
      <Box className={cn(carouselItem, className)}>{children}</Box>
    </Carousel.Item>
  );
}
