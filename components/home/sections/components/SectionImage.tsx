import Image from "next/image";

function SectionImage({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <div className="relative h-[50vh] w-[85vw] mx-auto md:image md:w-[30vw] image mb-6 2xl:w-[30vw]">
      <Image
        src={imageUrl}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg "
      />
    </div>
  );
}
export default SectionImage;
