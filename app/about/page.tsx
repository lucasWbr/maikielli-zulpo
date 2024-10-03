import AboutPageContent from "../../components/about/AboutPageContent";
import { fetchCollaborators } from "@/utils/actions";
import Container from "@/components/global/Container";
import SectionTitle from "@/components/home/sections/components/SectionTitle";
import Underline from "@/components/global/Underline";
import { Suspense } from "react";
import LoadingContainer from "@/components/loading/LoadingContainer";

async function AboutPage() {
  const collaborators = await fetchCollaborators();
  return (
    <section className="min-h-[85vh] pt-20 bg-clrPrimary10">
      <Container className="w-[85vw] mx-auto">
        <SectionTitle title="Quem Somos" />
        <Underline classes="mx-auto mb-20" />
        <Suspense fallback={<LoadingContainer type="about" />}>
          <AboutPageContent collaborators={collaborators} />
        </Suspense>
      </Container>
    </section>
  );
}
export default AboutPage;
