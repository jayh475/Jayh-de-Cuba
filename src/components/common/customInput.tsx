import type { Ref, ChangeEvent, KeyboardEvent } from "react";
import { forwardRef } from "react";

export default forwardRef(function CustomInput(
  {
    type = "text",
    placeholder,
    value,
    onInputChange,
    onKeyUp,
    width = "100%",
    id,
    maxLength,
    onKeyDown,
    label,
    BorderAndHighlight = true,
  }: {
    type?: string;
    placeholder?: string;
    value?: string;
    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
    width?: string;
    id?: string;
    maxLength?: number;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    label?: string;
    BorderAndHighlight?: boolean;
  },
  ref: Ref<HTMLInputElement>
) {
  const divHeightClass = label ? "h-12" : "h-8";
  const borderAndFocus =
    BorderAndHighlight &&
    "border-gray-300 border border-solid rounded-md focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-opacity-50";

  return (
    <div
      style={{ width: width }}
      className={`bg-white ${divHeightClass} ${borderAndFocus} `}
    >
      {label && (
        <label
          htmlFor={id}
          className="ml-1 block text-xs font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        maxLength={maxLength}
        type={type}
        placeholder={" " + (placeholder || "")}
        value={value}
        onChange={onInputChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        ref={ref}
        id={id}
        className="px-1 h-5 my-1 bg-white   outline-none w-full"
      />
    </div>
  );
});
