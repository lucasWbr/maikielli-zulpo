import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icons from "@/components/global/Icons";

type FormInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
};

function IconSelectInput({ name, label, placeholder, icon }: FormInputProps) {
  const icons = [
    "FaFireExtinguisher",
    "FaHardHat",
    "FaRulerCombined",
    "FaMinusCircle",
    "FaPlusCircle",
    "FaDraftingCompass",
    "FaBriefcaseMedical",
    "FaChair",
    "FaClipboardList",
    "FaPallet",
    "MdEngineering",
    "MdAssignment",
  ];
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <div>
        <div>
          <Select name={name} required defaultValue={icon}>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {icons.map((icon) => (
                <SelectItem value={icon} key={icon}>
                  <Icons type={icon} className="h-6 w-6" />
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
export default IconSelectInput;
