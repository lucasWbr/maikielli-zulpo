"use client";
import { Card } from "@/components/ui/card";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterCards({ number, text }: { number: string; text: string }) {
  const numberReceived = parseInt(number);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Card
      className="w-full h-[125px] md:h-[150px] md:w-[200px] shadow-lg flex flex-col justify-center text-center mx-auto xl:w-[20vw]"
      ref={ref}
    >
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-gisha font-bold text-clrPrimary2">
        +{inView ? <CountUp start={0} end={numberReceived} duration={3} /> : 0}
      </h1>
      <p className="font-semibold text-xs md:text-normal md:text-sm xl:text-base">
        {text}
      </p>
    </Card>
  );
}
export default CounterCards;
