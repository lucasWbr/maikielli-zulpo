import HeroLoadingContainer from "./HeroLoadingContainer";
import AboutLoadingContainer from "./AboutLoadingContainer";
import ServicesLoadingContainer from "./ServicesLoadingContainer";
import ClientsLoadingContainer from "./ClientsLoadingContainer";

function LoadingContainer({ section }: { section: string }) {
  switch (section) {
    case "hero":
      return <HeroLoadingContainer />;
    case "about":
      return <AboutLoadingContainer />;
    case "services":
      return <ServicesLoadingContainer />;
    case "clients":
      return <ClientsLoadingContainer />;
    default:
      return null;
  }
}

export default LoadingContainer;
