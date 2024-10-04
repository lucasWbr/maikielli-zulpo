"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Services } from "@prisma/client";
import SingleService from "../singleService/SingleService";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

function ServiceContent({ services }: { services: Services[] }) {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {services.map((service) => {
          return (
            <CarouselItem key={service.id} className="md:basis-1/3">
              <Link href={`/services/${service.id}`}>
                <SingleService
                  icon={service.icon}
                  title={service.name}
                  textShort={service.textShort}
                />
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  );
}
export default ServiceContent;
