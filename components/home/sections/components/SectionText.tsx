//Atenção, revisitar depois de adicionar o dashboard do admin

function SectionText({ text }: { text: string }) {
  const textSplit = text.split("\n");

  return (
    <div className="mt-8 mx-auto text-clrPrimary4 mb-8 max-h-80 overflow-hidden md:max-w-[40vw]">
      {textSplit.map((text, index) => (
        <p key={index} className="font-light text-md">
          {text}
        </p>
      ))}
    </div>
  );
}
export default SectionText;
