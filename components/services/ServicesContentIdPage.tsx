import Container from "../global/Container";
import SectionTitle from "../home/sections/components/SectionTitle";
import Underline from "../global/Underline";
import SectionText from "../home/sections/components/SectionText";
import SectionImage from "../home/sections/components/SectionImage";

function ServicesContentIdPage({
  title,
  text,
  imageUrl,
  imageAlt,
}: {
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <section className="mt-10 mb-20">
      <Container className="flex flex-col md:flex-row">
        <div className="flex justify-center mx-auto ">
          <SectionImage imageUrl={imageUrl} imageAlt={imageAlt} />
        </div>
        <div className="flex flex-col mx-auto w-[85vw] md:w-[40vw] xl:w-[30vw]">
          <SectionTitle title={title} />
          <Underline classes="mt-2 mx-auto" />
          <SectionText text={text} />
        </div>
      </Container>
    </section>
  );
}
export default ServicesContentIdPage;
