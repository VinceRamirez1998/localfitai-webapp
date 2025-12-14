import { useController } from "react-hook-form";

export default function FormInput({
  label,
  name,
  control,
  type = "text",
  placeholder,
  disabled = false,
}) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="mb-5">
      {label && <label className="block mb-1">{label}</label>}

      <input
        value={field.value || ""}
        onChange={field.onChange}
        onBlur={field.onBlur}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full border rounded px-3 py-2"
      />

      {error && <p className="text-red-500 text-xs -mt-[17px]">{error.message}</p>}
    </div>
  );
}
