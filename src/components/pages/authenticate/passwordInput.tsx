import type { Ref, ChangeEvent, KeyboardEvent } from "react";
import { forwardRef } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default forwardRef(function PasswordInput(
  {
    placeholder,
    value,
    onInputChange,
    onKeyUp,
    onKeyDown,
    tailwindWidth = "w-full",
    id,
    maxLength,
    showPassword = false,
    setShowPassword,
  }: {
    placeholder?: string;
    value?: string;
    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    tailwindWidth?: string;
    id?: string;
    maxLength?: number;
    showPassword?: boolean; // Added prop for showing password
    setShowPassword?: (show: boolean) => void; // Added handler for toggling password visibility
  },
  ref: Ref<HTMLInputElement>
) {
  return (
    <div
      className={`flex items-center p-3 border border-gray-300 rounded-b-lg  bg-gray-100 ${tailwindWidth}`}
    >
      <input
        ref={ref}
        maxLength={maxLength}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Enter your password"}
        value={value}
        onChange={onInputChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        id={id}
        className="flex-grow outline-none border-0  px-1 2 bg-gray-100"
      />
      {setShowPassword && (
        <button
          type="button"
          onClick={() => setShowPassword && setShowPassword(!showPassword)}
          className="text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
        </button>
      )}
    </div>
  );
});
