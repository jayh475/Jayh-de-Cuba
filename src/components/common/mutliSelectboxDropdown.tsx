import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function MutliSelectboxDropdown({
  options,
  placeholder,
  onSelectionChange,
  selectedOptions,
  setSelectedOptions,
}: {
  options: { label: string; value: string }[];
  placeholder: string;
  onSelectionChange?: (selectedOptions: string[]) => void;
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleOption = (optionValue: string) => {
    setSelectedOptions(prevSelected => {
      const newSelected = prevSelected.includes(optionValue)
        ? prevSelected.filter(value => value !== optionValue)
        : [...prevSelected, optionValue];
      if (onSelectionChange) {
        onSelectionChange(newSelected);
      }
      return newSelected;
    });
  };

  // Handle outside click for closing dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <div
        className="form-input flex justify-between items-center w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-2 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-grow">{placeholder}</span>
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <div className="absolute mt-1 left-0 z-10 w-56 bg-white border border-gray-300 rounded shadow-lg">
          {options?.map(option => (
            <div
              key={option.value}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.value)}
                onChange={() => toggleOption(option.value)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <span className="ml-2 text-sm text-gray-800">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
