import React from "react";
import CustomButton from "~/components/common/customButton";

interface TabItem {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Card({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  tabItems,
  children,
}: {
  title: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  tabItems?: TabItem[];
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full p-4 bg-white rounded-lg shadow space-y-2">
      <div className="flex-1">
        <h2 className="text-lg font-bold">{title}</h2>
        {subtitle && <p className="text-sm">{subtitle}</p>}
        <div className="mt-2">{children}</div>
      </div>
      {buttonText && (
        <CustomButton
          onClick={onButtonClick}
          placeholder={buttonText}
          tailwindWidth="w-1/3"
        ></CustomButton>
      )}

      {tabItems && (
        <div className="flex space-x-2 mt-auto">
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              onClick={tab.onClick}
              className={`px-4 py-1 rounded ${
                tab.isActive
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
