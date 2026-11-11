import type { MouseEventHandler, Ref, ReactNode } from "react";
import { forwardRef } from "react";

export default forwardRef(function CustomButton(
  {
    type = "button",
    href = "",
    className = "",
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
    href?: string;
    className?: string;
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

  const style = [
    "flex items-center rounded-full",
    href
      ? "justify-center px-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F49]"
      : "px-4",
    textColorClass,
    bgColorClass,
    opacityClass,
    hoverColorClass,
    tailwindWidth,
    fixedHeight,
    className,
  ].join(" ");

  const content = (
    <>
      {iconPosition === "left" && icon}
      {placeholder && <span className={icon ? "ml-2" : ""}>{placeholder}</span>}
      {iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <a id={id} href={href} className={style}>
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      id={id}
      type={type}
      className={style}
      value={value}
      onClick={onClick}
    >
      {content}
    </button>
  );
});
