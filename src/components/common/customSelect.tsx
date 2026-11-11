export default function CustomSelect({
  options,
  selectedOption,
  handleChange,
  width = "100%",
  placeholder = "Choose..",
  label,
}: {
  options: string[];
  handleChange: (updatedOption: any | string) => void;
  selectedOption: string | undefined;
  width?: string;
  placeholder?: string;
  label?: string;
}) {
  const divHeightClass = label ? "h-12" : "h-8";

  const borderAndFocus =
    "border-gray-300  border-solid rounded-md focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-opacity-50 cursor-pointer";

  return (
    <div
      style={{ width: width }}
      className={`border border-solid ${divHeightClass} ${borderAndFocus} border-gray-300 border-b-gray-400 cursor-pointer`}
    >
      <label className="ml-1 block text-xs font-medium text-gray-700 cursor-pointer">
        {label}
      </label>
      <select
        value={selectedOption}
        onChange={() => handleChange}
        style={{ width: width }}
        className={` outline-none cursor-pointer`}
      >
        <option value="">{placeholder}</option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
