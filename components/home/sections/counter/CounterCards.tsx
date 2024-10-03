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
      className="h-[20vh] w-[25vw] shadow-lg flex flex-col justify-center text-center mx-auto xl:w-[20vw]"
      ref={ref}
    >
      <h1 className="text-4xl font-gisha font-bold text-clrPrimary2">
        +{inView ? <CountUp start={0} end={numberReceived} duration={3} /> : 0}
      </h1>
      <p className="font-semibold">{text}</p>
    </Card>
  );
}
export default CounterCards;
