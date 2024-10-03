import SingleService from "../home/sections/services/singleService/SingleService";
import { Services } from "@prisma/client";
import Link from "next/link";

function ServicesContentPage({ services }: { services: Services[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto pb-8">
      {services
        ? services.map((service) => (
            <Link
              href={`/services/${service.id}`}
              key={service.id}
              className="md:flex pb-8 mt-8 mx-auto"
            >
              <SingleService
                key={service.id}
                icon={service.icon}
                title={service.name}
                textShort={service.textShort}
              />
            </Link>
          ))
        : null}
    </div>
  );
}
export default ServicesContentPage;
