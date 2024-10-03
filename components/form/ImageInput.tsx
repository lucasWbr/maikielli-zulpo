import { Label } from "../ui/label";
import { Input } from "../ui/input";

function ImageInput() {
  const name = "imagem";

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Imagem
      </Label>
      <Input id={name} name={name} type="file" required accept="imagem/*" />
    </div>
  );
}
export default ImageInput;
