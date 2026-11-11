export default function AlertBox({
  message,
  type = "error",
  width = "w-full",
  maxWidth = "max-w-xl",
}: {
  message: string;
  maxWidth?: string;
  width?: string;
  type?: "error" | "info" | "success" | "warning";
}) {
  const borderColorClasses = {
    error: "border-rose-500",
    info: "border-blue-500",
    success: "border-green-500",
    warning: "border-yellow-500",
  };

  const backgroundColorClasses = {
    error: "bg-rose-200",
    info: "bg-blue-100",
    success: "bg-green-100",
    warning: "bg-yellow-100",
  };

  const textColorClasses = {
    error: "text-rose-600",
    info: "text-blue-600",
    success: "text-green-600",
    warning: "text-yellow-600",
  };

  // Determine the classes based on the type
  const borderColor = borderColorClasses[type];
  const backgroundColor = backgroundColorClasses[type];
  const textColor = textColorClasses[type];

  return (
    <div
      className={`border-l-4 ${borderColor} flex items-center ${backgroundColor} ${maxWidth} ${width} h-fit p-2 rounded-lg my-4`}
    >
      <p className={`${textColor}`}>{message}</p>
    </div>
  );
}
