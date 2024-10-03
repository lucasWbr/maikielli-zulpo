import Underline from "@/components/global/Underline";

function HeroTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col text-center relative pt-10 pb-4 ">
      <Underline classes="absolute top-0 left-20" />
      <h1 className="text-7xl font-bold text-clrPrimary2 font-gisha capitalize">
        {title}
      </h1>
    </div>
  );
}
export default HeroTitle;
