"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormInputProps = {
  name: string;
  type: string;
  mode: string;
  nameUrl?: string;
  placeholderUrl?: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

export default function SocialMediaInput({
  name,
  nameUrl,
  type,
  mode,
  label,
  defaultValue,
  placeholder,
  placeholderUrl,
}: FormInputProps) {
  switch (mode) {
    case "edit": {
      return (
        <div className="mb-2">
          <Label htmlFor={name} className="capitalize">
            {label || name}
          </Label>
          <div className="flex ">
            <div className="w-1/3 flex-none">
              <Select name={name} required defaultValue={placeholder}>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="behance">Behance</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              id={name}
              name={nameUrl}
              type={type}
              defaultValue={defaultValue}
              placeholder={placeholderUrl}
              required
              className="grow"
            />
          </div>
        </div>
      );
    }
    case "create": {
      return (
        <div className="mb-2">
          <Label htmlFor={name} className="capitalize">
            {label || name}
          </Label>
          <div className="flex ">
            <div className="w-1/3 flex-none">
              <Select name={name} required>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="behance">Behance</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              id={name}
              name={nameUrl}
              type={type}
              defaultValue={defaultValue}
              placeholder={placeholderUrl}
              required
              className="grow"
            />
          </div>
        </div>
      );
    }
    default:
      throw new Error("Invalid type");
  }
}
