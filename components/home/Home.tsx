import Hero from "./sections/hero/Hero";
import {
  fetchSections,
  fetchSocialMediaGeneral,
  fetchServices,
  fetchGeneralInfo,
  fetchClients,
  fetchCollaborators,
  fetchApprovedArea,
} from "@/utils/actions";
import { HomeSection } from "@/lib/types";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Counter from "./sections/counter/Counter";
import Clients from "./sections/clients/Clients";
import { Suspense } from "react";
import LoadingContainer from "@/components/loading/LoadingContainer";

const Home = async () => {
  const [
    sections,
    servicesList,
    generalInfo,
    collaboratorsList,
    socialMediaData,
    clientsList,
    approvedArea,
  ] = await Promise.all([
    fetchSections(),
    fetchServices(),
    fetchGeneralInfo(),
    fetchCollaborators(),
    fetchSocialMediaGeneral(),
    fetchClients(),
    fetchApprovedArea(),
  ]);

  const heroSection = sections.find(
    (section) => section.name === "hero"
  ) as HomeSection & { subtitle?: string; crea?: string };
  const aboutSection = sections.find((section) => section.name === "about");
  const servicesSection = sections.find(
    (section) => section.name === "services"
  );
  const clientsSection = sections.find((section) => section.name === "clients");

  const socialMedia = socialMediaData?.socialMedia || [];

  const { totalClients: totalClients } = generalInfo[0];

  if (
    !heroSection ||
    !aboutSection ||
    !servicesSection ||
    !clientsSection ||
    !servicesList ||
    !generalInfo ||
    !collaboratorsList ||
    !clientsList
  ) {
    return <div>Informações não encontradas</div>;
  }

  return (
    <>
      <section id="hero">
        <Suspense fallback={<LoadingContainer section="hero" />}>
          <Hero
            title={heroSection.title}
            subtitle={heroSection.subtitle}
            crea={heroSection.crea}
            text={heroSection.text}
            image={heroSection.imageUrl || ""}
            altImage={heroSection.imageAlt || ""}
            socialLinks={socialMedia}
          />
        </Suspense>
      </section>

      <section id="about">
        <Suspense fallback={<LoadingContainer section="about" />}>
          <About
            title={aboutSection.title}
            text={aboutSection.text}
            imageUrl={aboutSection.imageUrl || ""}
            imageAlt={aboutSection.imageAlt || ""}
            href={aboutSection.name}
          />
        </Suspense>
      </section>

      <section id="services">
        <Suspense fallback={<LoadingContainer section="services" />}>
          <Services title={servicesSection.title} servicesList={servicesList} />
        </Suspense>
      </section>

      <Counter totalClients={totalClients} approvedArea={approvedArea} />

      <section id="clients">
        <Suspense fallback={<LoadingContainer section="clients" />}>
          <Clients
            title={clientsSection.title}
            text={clientsSection.text}
            clients={clientsList}
            href={clientsSection.name}
          />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
