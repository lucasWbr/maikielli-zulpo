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

function ServiceContent({ services }: { services: Services[] }) {
  return (
    <Carousel opts={{ loop: true }}>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default ServiceContent;
