import React, { useState, useRef, useEffect, forwardRef } from "react";
import CustomInput from "./customInput";
import { IoIosArrowDown } from "react-icons/io";

export default forwardRef(function FilterableDropdown({
  options,
  selectedValue,
  setSelectedValue,
}: {
  options: { label: string; value: string }[];
  placeholder?: string;
  selectedValue: string | undefined;
  setSelectedValue: (value: string | undefined) => void;
}) {
  const [searchResults, setSearchResults] = useState<string | undefined>(
    undefined
  );

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle outside click for closing dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        event.stopPropagation();
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleInputKeyPress = (
    input: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const inputValue = input.currentTarget.value.toLowerCase();
    if (input.key === "Enter") {
      // Filter options that include the inputValue
      const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(inputValue)
      );

      // If there's only one matching option, select it
      if (filteredOptions.length === 1) {
        setSelectedValue(filteredOptions[0].value);
        setSearchResults("");
      } else {
        // If there's no match or more than one, find the exact match
        const matchingOption = options.find(
          option => option.value.toLowerCase() === inputValue
        );
        if (matchingOption) {
          setSelectedValue(matchingOption.value);
        }
        setSearchResults("");
      }
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div
        className="form-input flex justify-between items-center w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-2  h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-grow">
          {options.find(option => option.value === selectedValue)?.label}
        </span>
        <IoIosArrowDown />
      </div>

      {isOpen && (
        <div className=" border border-gray-300 border-solid rounded-md w-full h-full bg-white z-10 absolute">
          <div className="p-2">
            <CustomInput
              value={searchResults}
              type="text"
              onInputChange={e => setSearchResults(e.target.value)}
              onKeyUp={handleInputKeyPress}
              ref={inputRef}
            />
          </div>

          <ul className=" bg-white border mt-1 max-h-60 overflow-auto">
            {options
              .filter(option =>
                option.label
                  .toLowerCase()
                  .includes(searchResults?.toLowerCase() || "")
              )
              .map(option => (
                <li
                  key={option.value}
                  className="px-4 py-2 hover:bg-blue-300 cursor-pointer rounded-lg"
                  onClick={() => {
                    setSelectedValue(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});
