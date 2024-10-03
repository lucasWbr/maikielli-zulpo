import HeroLoadingContainer from "./HeroLoadingContainer";
import AboutLoadingContainer from "./AboutLoadingContainer";
import ServicesLoadingContainer from "./ServicesLoadingContainer";
import ProjectsLoadingContainer from "./ProjectsLoadingContainer";
import ClientsLoadingContainer from "./ClientsLoadingContainer";

function LoadingContainer({ type }: { type: string }) {
  switch (type) {
    case "hero":
      return <HeroLoadingContainer />;
    case "about":
      return <AboutLoadingContainer />;
    case "services":
      return <ServicesLoadingContainer />;
    case "projects":
      return <ProjectsLoadingContainer />;
    case "clients":
      return <ClientsLoadingContainer />;
    default:
      throw new Error(`Type ${type} not found`);
  }
}
export default LoadingContainer;
