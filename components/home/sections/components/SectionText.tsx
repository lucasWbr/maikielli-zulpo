//Atenção, revisitar depois de adicionar o dashboard do admin

import React from "react";

function SectionText({ text }: { text: string }) {
  if (!text) return null;

  const textSplit = text.split("\n");

  return (
    <div className="mt-8 mx-auto text-clrPrimary4 mb-8 max-h-80 overflow-hidden md:max-w-[40vw]">
      {textSplit.map((line, index) => (
        <p key={index} className="mb-4 text-base md:text-lg leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  );
}
export default SectionText;
