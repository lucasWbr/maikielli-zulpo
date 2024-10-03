import Hero from "./sections/hero/Hero";
import {
  fetchSections,
  fetchSocialMediaGeneral,
  fetchServices,
  fetchProjects,
  fetchGeneralInfo,
} from "@/utils/actions";
import { HomeSection } from "@prisma/client";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Projects from "./sections/projects/Projects";
import Counter from "./sections/counter/Counter";
import Clients from "./sections/clients/Clients";
import { Suspense } from "react";
import LoadingContainer from "@/components/loading/LoadingContainer";

async function Home() {
  const sections = await fetchSections();
  const hero = sections.find((section) => section.name === "hero");
  const about = sections.find((section) => section.name === "about");
  const services = sections.find((section) => section.name === "services");
  const projects = sections.find((section) => section.name === "projects");
  const clients = sections.find((section) => section.name === "clients");

  const {
    title: titleHero,
    text: textHero,
    imageUrl: imageUrlHero,
    imageAlt: imageAltHero,
  } = hero as HomeSection;
  const {
    name: nameAbout,
    title: titleAbout,
    text: textAbout,
    imageUrl: imageUrlAbout,
    imageAlt: imageAltAbout,
  } = about as HomeSection;
  const {
    name: nameClients,
    title: titleClients,
    text: textClients,
    imageUrl: imageUrlClients,
    imageAlt: imageAltClients,
  } = clients as HomeSection;
  const { title: titleServices } = services as HomeSection;
  const {
    title: titleProjects,
    text: textProjects,
    name: nameProjects,
  } = projects as HomeSection;

  const socialMediaGeneral = await fetchSocialMediaGeneral();

  const servicesList = await fetchServices();

  const projectsList = await fetchProjects();

  const generalInfo = await fetchGeneralInfo();

  const {
    totalArea: totalArea,
    totalClients: totalClients,
    totalProjects: totalProjects,
  } = generalInfo[0];

  return (
    <div>
      <Suspense fallback={<LoadingContainer type="hero" />}>
        <Hero
          title={titleHero}
          text={textHero}
          image={imageUrlHero ? imageUrlHero : ""}
          altImage={imageAltHero ? imageAltHero : ""}
          socialLinks={
            socialMediaGeneral?.socialMedia
              ? socialMediaGeneral.socialMedia
              : []
          }
        />
      </Suspense>
      <About
        title={titleAbout}
        text={textAbout}
        imageUrl={imageUrlAbout ? imageUrlAbout : ""}
        imageAlt={imageAltAbout ? imageAltAbout : ""}
        href={nameAbout}
      />

      <Services title={titleServices} servicesList={servicesList} />
      <Projects
        title={titleProjects}
        text={textProjects}
        projectsList={projectsList}
        href={nameProjects}
      />
      <Counter
        totalArea={totalArea}
        totalClients={totalClients}
        totalProjects={totalProjects}
      />
      <Clients
        title={titleClients}
        text={textClients}
        imageUrl={imageUrlClients ? imageUrlClients : ""}
        imageAlt={imageAltClients ? imageAltClients : ""}
        href={nameClients}
      />
    </div>
  );
}
export default Home;
