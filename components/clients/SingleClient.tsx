import Image from "next/image";

function SingleClient({
  imageUrl,
  imageAlt,
  title,
}: {
  imageUrl: string;
  imageAlt: string;
  title: string;
}) {
  return (
    <div className="relative w-60 h-60 rounded-xl shadow-2xl mx-auto">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        objectFit="cover"
        className="rounded-xl border-8 border-clrPrimary9 shadow-2xl"
      />
      <div className="absolute bottom-0 left-0 bg-clrPrimary2 w-full h-10 text-center content-center rounded-b-xl text-clrPrimary10">
        <h1 className="font-semibold">{title}</h1>
      </div>
    </div>
  );
}
export default SingleClient;
