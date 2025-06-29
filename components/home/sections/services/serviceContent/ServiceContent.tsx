"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Services } from "@/lib/types";
import SingleService from "../singleService/SingleService";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

function ServiceContent({ services }: { services: Services[] }) {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  );
  return (
    <Carousel
      opts={{
        loop: true,
        align: "center",
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full max-w-sm sm:max-w-sm md:max-w-6xl mx-auto relative"
    >
      <CarouselContent className="sm:mx-0">
        {services.map((service) => {
          return (
            <CarouselItem
              key={service.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <SingleService
                icon={service.icon}
                title={service.name}
                textShort={service.textShort}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="sm:hidden -left-12 top-1/2 -translate-y-1/2 bg-transparent border-none shadow-none hover:bg-transparent text-gray-600 hover:text-gray-800 w-10 h-10" />
      <CarouselNext className="sm:hidden -right-12 top-1/2 -translate-y-1/2 bg-transparent border-none shadow-none hover:bg-transparent text-gray-600 hover:text-gray-800 w-10 h-10" />
    </Carousel>
  );
}
export default ServiceContent;
