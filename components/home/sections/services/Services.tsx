import Underline from "@/components/global/Underline";
import SectionTitle from "../components/SectionTitle";
import Container from "@/components/global/Container";
import { Services as ServicesList } from "@prisma/client";
import ServiceContent from "./serviceContent/ServiceContent";

function Services({
  servicesList,
  title,
}: {
  servicesList: ServicesList[];
  title: string;
}) {
  return (
    <section className="bg-slate-100 pb-20 shadow-sm">
      <Container>
        <div className="flex flex-col justify-center text-center pt-16">
          <SectionTitle title={title} />
          <Underline classes="mx-auto mt-2" />
        </div>
        <ServiceContent services={servicesList} />
      </Container>
    </section>
  );
}
export default Services;
