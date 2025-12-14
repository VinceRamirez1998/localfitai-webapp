import * as React from "react";
import { useController } from "react-hook-form";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function FormDatePicker({
  label,
  name,
  control,
  placeholder = "Select date",
  disabled = false,
}) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [open, setOpen] = React.useState(false);

  return (
    <div className="mb-5">
      {label && (
        <label htmlFor={name} className="block mb-1">
          {label}
        </label>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {/* <input
            value={field.value || new Date(field.value).toLocaleDateString()}
            placeholder={placeholder}
          /> */}
          <Button
            variant="outline"
            id={name}
            disabled={disabled}
            className="
              w-full justify-between h-11
              bg-[#eaeaea]
              shadow-none
              border
              hover:shadow-none
              focus:shadow-none
              focus-visible:shadow-none
              ring-0
              focus:ring-0
              focus-visible:ring-0
            "
          >
            {field.value
              ? new Date(field.value).toLocaleDateString()
              : placeholder}
            <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value ? new Date(field.value) : undefined}
            captionLayout="dropdown"
            onSelect={(date) => {
              field.onChange(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
}
