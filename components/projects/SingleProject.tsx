import Image from "next/image";

function SingleProject({
  title,
  client,
  imageUrl,
  imageAlt,
}: {
  title: string;
  client: string;
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <div className="relative w-80 h-40 mx-auto">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        objectFit="cover"
        className="rounded-lg border-2 border-clrPrimary5 shadow-lg "
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-clrPrimary10 z-10">
        <h1 className="font-gisha font-bold text-2xl whitespace-nowrap">
          {title}
        </h1>
        <p className="font-light">{client}</p>
      </div>
      <div className="absolute inset-0 bg-clrPrimary4 rounded-lg opacity-60 hover:bg-clrPrimary2"></div>
    </div>
  );
}
export default SingleProject;
