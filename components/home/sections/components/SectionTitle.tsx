function SectionTitle({ title }: { title: string }) {
  const titleSection = title.split(" ");

  if (titleSection.length == 2) {
    return (
      <div className="flex gap-2 font-gisha font-bold text-5xl capitalize justify-center">
        <h1 className="text-clrPrimary2">{titleSection[0]}</h1>
        <h1 className="text-clrPrimary4">{titleSection[1]}</h1>
      </div>
    );
  } else if (titleSection.length == 1) {
    return (
      <div className="font-gisha font-bold text-5xl capitalize">
        <h1 className="text-clrPrimary2">{titleSection[0]}</h1>
      </div>
    );
  } else {
    return (
      <div className="font-gisha font-bold text-5xl capitalize">
        <h1 className="text-clrPrimary2">{title}</h1>
      </div>
    );
  }
}
export default SectionTitle;
