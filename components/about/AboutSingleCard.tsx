import Image from "next/image";

function AboutSingleCard({
  id,
  imageUrl,
  imageAlt,
  name,
  role,
}: {
  id: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  role: string;
}) {
  return (
    <div key={id} className="relative w-[200px] h-[400px] hover:shadow-2xl">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        objectFit="cover"
        className="rounded-t-lg shadow-xl border-4 border-clrPrimary2"
      />
      <div className="absolute bottom-0  left-0 w-full h-[64px] bg-clrPrimary2 text-clrPrimary10 text-center flex flex-col justify-center">
        <h2 className="font-gisha font-bold tracking-wide">{name}</h2>
        <p className="font-extralight">{role}</p>
      </div>
    </div>
  );
}
export default AboutSingleCard;
