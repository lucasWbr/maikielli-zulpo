import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchClients } from "@/utils/actions";

type FormInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

async function ClientSelectInput({ name, label, placeholder }: FormInputProps) {
  const clients = await fetchClients();
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <div>
        <div>
          <Select name={name} required>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {clients.map((client) => (
                <SelectItem value={client.id}>{client.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
export default ClientSelectInput;
