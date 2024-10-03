import { Skeleton } from "../ui/skeleton";
import Container from "../global/Container";
import Underline from "../global/Underline";

function HeroLoadingContainer() {
  return (
    <section className="bg-clrPrimary10 h-[85vh]">
      <Container className="flex justify-between gap-2 w-[85vw] mx-auto">
        <div className="flex flex-col justify-center items-center h-[85vh] w-[90vw]  md:w-[40vw] mx-auto text-center">
          <div className="flex flex-col text-center relative pt-10 pb-4 ">
            <Underline classes="absolute top-0 left-20" />
            <div className="text-7xl font-bold text-clrPrimary2 font-gisha capitalize">
              <Skeleton className="h-10 w-80 mb-8" />
            </div>
            <div className="text-3xl font-sans text-clrPrimary4 mb-4">
              <Skeleton className="h-6 w-60" />
            </div>
          </div>
        </div>
        <div className="justify-center items-center hidden md:flex md:w-[40vw] mx-auto">
          <div className="relative w-[40vw] h-[40vh]">
            <Skeleton className="absolute top-0 right-0 w-[400px] h-[400px] image" />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default HeroLoadingContainer;
