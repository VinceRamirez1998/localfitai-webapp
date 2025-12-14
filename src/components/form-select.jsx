import { useController } from "react-hook-form";

export default function FormSelect({
  label,
  name,
  control,
  options = [],
  placeholder = "Select an option",
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
      {label && (
        <label htmlFor={name} className="block mb-1">
          {label}
        </label>
      )}

      <select
        id={name}
        {...field}
        disabled={disabled}
        className="w-full border rounded px-3 py-2"
      >
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-xs -mt-[0px]">{error.message}</p>}
    </div>
  );
}
