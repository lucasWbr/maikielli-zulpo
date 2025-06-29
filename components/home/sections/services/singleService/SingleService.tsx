"use client";

import Icons from "@/components/global/Icons";
import { useRouter } from "next/navigation";

function SingleService({
  icon,
  title,
  textShort,
}: {
  icon: string;
  title: string;
  textShort: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/services");
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-clrPrimary5 rounded-lg p-4 sm:p-6 h-[280px] sm:h-[320px] flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-clrPrimary8"
    >
      <div className="bg-clrPrimary10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mt-1 sm:mt-2 group-hover:bg-clrPrimary5 transition-colors duration-300">
        <Icons
          name={icon}
          className="w-6 h-6 sm:w-8 sm:h-8 text-clrPrimary5 group-hover:text-clrPrimary10 transition-colors duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="text-base sm:text-lg font-semibold text-clrPrimary10 mb-2 sm:mb-3 group-hover:text-clrPrimary3 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-clrPrimary10 text-xs sm:text-sm leading-relaxed group-hover:text-clrPrimary3 transition-colors duration-300">
          {textShort}
        </p>
      </div>
    </div>
  );
}
export default SingleService;
