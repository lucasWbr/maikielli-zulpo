import Image from "next/image";

function HeroImage({ image, altImage }: { image: string; altImage: string }) {
  return (
    <div className="justify-center items-center hidden md:flex md:w-[40vw] mx-auto">
      <div className="relative w-[40vw] h-[40vh] image ">
        <Image
          src={image}
          alt={altImage}
          className="rounded-lg shadow-md"
          objectFit="cover"
          fill
        />
      </div>
    </div>
  );
}
export default HeroImage;
