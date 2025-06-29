function SectionTitle({ title }: { title: string }) {
  if (!title) return null;

  const titleSection = title.split(" ");

  if (titleSection.length == 2) {
    return (
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-clrPrimary1 text-center">
        {titleSection[0]}{" "}
        <span className="text-clrPrimary5">{titleSection[1]}</span>
      </h2>
    );
  }
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-clrPrimary1 text-center">
      {title}
    </h2>
  );
}
export default SectionTitle;
