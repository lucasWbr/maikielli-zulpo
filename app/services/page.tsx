import SectionTitle from "@/components/home/sections/components/SectionTitle";
import Container from "@/components/global/Container";
import Underline from "@/components/global/Underline";
import ServicesContentPage from "@/components/services/ServicesContentPage";
import { fetchServices } from "@/utils/actions";
import { Suspense } from "react";
import LoadingContainer from "@/components/loading/LoadingContainer";

async function ServicesPage() {
  const servicesList = await fetchServices();
  return (
    <section className="min-h-[85vh] pt-20 bg-slate-100">
      <Container className="w-[85vw] mx-auto text-center">
        <SectionTitle title="Serviços" />
        <Underline classes="mx-auto" />
        <Suspense fallback={<LoadingContainer type="services" />}>
          <ServicesContentPage services={servicesList} />
        </Suspense>
      </Container>
    </section>
  );
}
export default ServicesPage;
