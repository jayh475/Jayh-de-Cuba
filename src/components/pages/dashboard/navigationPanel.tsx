import CustomButton from "~/components/common/customButton";

export default function NavigationPanel({
  selectedNavItem,
  onNavItemClick,
}: {
  selectedNavItem: string;
  onNavItemClick: (item: string) => void;
}) {
  const navItems = [
    "Dashboard",
    "My Bookmarks",
    "My Job Alerts",
    "CV Database",
    "Job listing",
    "Post a Remote Job",
    "My Company",
    "Settings",
    "Orders & Billing",
    "Affiliate Program",
    "Logout",
    // ... add all the nav items here
  ];

  return (
    <div className="flex flex-col space-y-4">
      <CustomButton placeholder="Post a remote job >" tailwindWidth="w-full" />

      {navItems.map((item) => (
        <div
          key={item}
          className={`cursor-pointer rounded-lg py-2 px-2 ${
            selectedNavItem === item ? "bg-sky-500" : "bg-transparent"
          } `}
          onClick={() => onNavItemClick(item)}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
