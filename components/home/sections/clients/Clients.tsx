import SectionImage from "../components/SectionImage";
import SectionText from "../components/SectionText";
import SectionTitle from "../components/SectionTitle";
import Underline from "@/components/global/Underline";
import SectionButton from "../components/SectionButton";
import Container from "@/components/global/Container";

function Clients({
  title,
  text,
  imageUrl,
  imageAlt,
  href,
}: {
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}) {
  return (
    <section className="pt-16 pb-20 bg-slate-100">
      <Container className="flex flex-col md:flex-row">
        <div className="flex justify-center mx-auto order-2">
          <SectionImage imageUrl={imageUrl} imageAlt={imageAlt} />
        </div>
        <div className="flex flex-col mx-auto w-[85vw] md:w-[40vw] xl:w-[30vw] order-1 text-center items-center mb-10">
          <SectionTitle title={title} />
          <Underline classes="mt-2 mx-auto" />
          <SectionText text={text} />
          <SectionButton href={href} />
        </div>
      </Container>
    </section>
  );
}
export default Clients;
