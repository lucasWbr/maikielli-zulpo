import Icons from "@/components/global/Icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SingleService({
  icon,
  title,
  textShort,
}: {
  icon: string;
  title: string;
  textShort: string;
}) {
  return (
    <Card className="mt-8 w-[60vw] h-[40vh] md:w-[25vw] xl:w-[20vw] mx-auto text-clrPrimary4 shadow-md hover:bg-clrPrimary5 hover:text-white ease-in-out duration-300 text-center overflow-hidden">
      <CardHeader>
        <CardTitle>
          <Icons type={icon} className="w-8 h-8 mx-auto mb-2" />
        </CardTitle>
        <CardTitle className="uppercase text-md font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="overflow-hidden text-md max-h-[20vh]">{textShort}</p>
      </CardContent>
    </Card>
  );
}
export default SingleService;
