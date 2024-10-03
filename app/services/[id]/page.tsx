import ServicesContentIdPage from "@/components/services/ServicesContentIdPage";
import { fetchServiceById } from "@/utils/actions";
import { Services } from "@prisma/client";

async function ServicesPageId({ params }: { params: { id: string } }) {
  const service = await fetchServiceById(params.id);

  const {
    name: titleService,
    textLong: text,
    imageUrl: imageUrlService,
    imageAlt: imageAltService,
  } = service as Services;

  return (
    <ServicesContentIdPage
      title={titleService}
      text={text}
      imageUrl={imageUrlService}
      imageAlt={imageAltService}
    />
  );
}
export default ServicesPageId;
