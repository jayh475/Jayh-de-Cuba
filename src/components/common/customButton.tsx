import type { MouseEventHandler, Ref, ReactNode } from "react";
import { forwardRef } from "react";

export default forwardRef(function CustomButton(
  {
    type = "button",
    placeholder,
    value,
    tailwindWidth = "w-full",
    id,
    onClick,
    icon,
    iconPosition = "left",
    fixedHeight = "h-11",
    hoverColorClass = "hover:bg-[#713F49]",
    textColorClass = "text-[#FFF8EE]",
    bgColorClass = "bg-[#283E34]",
    selected = false,
  }: {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    placeholder: string;
    value?: string;
    tailwindWidth?: string;
    id?: string;
    hoverColorClass?: string;
    textColorClass?: string;
    bgColorClass?: string;
    selected?: boolean;

    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    fixedHeight?: string; // New type for fixed height
  },
  ref: Ref<HTMLButtonElement>,
) {
  const opacityClass = selected ? "opacity-50" : "";

  return (
    <button
      ref={ref}
      id={id}
      type={type}
      className={`flex items-center  pl-4 pr-4 ${textColorClass} ${bgColorClass} ${opacityClass}  rounded-full ${hoverColorClass} ${tailwindWidth} ${fixedHeight}`}
      value={value}
      onClick={onClick}
    >
      {iconPosition === "left" && icon}
      {/* Placeholder is conditionally rendered if it exists */}
      {placeholder && (
        <span className={`${icon ? "ml-2" : ""}`}>{placeholder}</span>
      )}
      {iconPosition === "right" && icon}
    </button>
  );
});
