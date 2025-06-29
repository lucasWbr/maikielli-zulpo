"use client";
import { Card } from "@/components/ui/card";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterCards({
  number,
  text,
  prefix = "",
  suffix = "",
  isArea = false,
}: {
  number: string;
  text: string;
  prefix?: string;
  suffix?: string;
  isArea?: boolean;
}) {
  // Handle decimal numbers for area
  const numberReceived = isArea
    ? parseFloat(number.replace(/[^0-9.]/g, ""))
    : parseInt(number.replace(/[^0-9]/g, ""));

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Format the display based on type
  const formatNumberDisplay = (num: number): string => {
    if (isArea) {
      return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    }
    return num.toString();
  };

  return (
    <Card
      className="w-full h-[160px] md:h-[180px] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-center text-center mx-auto bg-gradient-to-br from-white to-clrPrimary10 border-2 border-clrPrimary8 hover:border-clrPrimary6"
      ref={ref}
    >
      <div className="px-4">
        {prefix && (
          <p className="text-sm md:text-base font-medium text-clrPrimary3 mb-2">
            {prefix}
          </p>
        )}
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-gisha font-bold text-clrPrimary1 mb-2">
          {inView ? (
            isArea ? (
              <CountUp
                start={0}
                end={numberReceived}
                duration={3}
                decimals={2}
                decimal=","
                separator="."
                formattingFn={(value) =>
                  new Intl.NumberFormat("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(value)
                }
              />
            ) : (
              <>
                <CountUp start={0} end={numberReceived} duration={3} />+
              </>
            )
          ) : isArea ? (
            "0,00"
          ) : (
            "0+"
          )}
        </h1>
        <p className="font-semibold text-sm md:text-base text-clrPrimary2">
          {text}
        </p>
      </div>
    </Card>
  );
}
export default CounterCards;
