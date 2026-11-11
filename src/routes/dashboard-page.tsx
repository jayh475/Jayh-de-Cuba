// import { type LoaderFunction } from "react-router";
// import { redirect } from "react-router";
// import { getSession } from "~/utils/session.server";

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import CustomButton from "~/components/common/customButton";
// import Cards from "~/components/roamer/dashboard/cards";
import Header from "~/components/pages/dashboard/header";
import NavigationPanel from "~/components/pages/dashboard/navigationPanel";
import Personalhelper from "~/components/pages/dashboard/personalhelper";
import StatisticsCard from "~/components/pages/dashboard/statisticsCard";
import UserProfileCard from "~/components/pages/dashboard/userProfileCard";

// export const loader: LoaderFunction = async ({ request }) => {
//   const session = await getSession(request.headers.get("Cookie"));
//   if (!session.has("userId")) {
//     // Redirect to login if not authenticated
//     return redirect("/my-profile");
//   }
// };

export default function DashboardPage() {
  const [dashboardMenuOpen, setDashboarMenuOpen] = useState<boolean>(true);
  const [selectedNavItem, setSelectedNavItem] = useState<string>("Dashboard");
  // const [recentActivities, setRecentActivities] = useState<
  //   { id: number; activity: string; timestamp: string }[]
  // >([]);

  useEffect(() => {
    // Handler to set the initial dashboard menu state based on screen width
    const updateMenuState = () => {
      const isSmallScreen = window.innerWidth < 1024; // or use your own breakpoint here
      setDashboarMenuOpen(!isSmallScreen);
    };
    // Set state on mount
    updateMenuState();

    // Optional: Set the state on window resize
    window.addEventListener("resize", updateMenuState);

    // Cleanup listener to prevent memory leaks
    return () => window.removeEventListener("resize", updateMenuState);
  }, []);

  const handleNavItemClick = (itemName: string) => {
    setSelectedNavItem(itemName);
    if (window.innerWidth < 1024) {
      setDashboarMenuOpen(false);
    }
  };

  // Handler for when tab is clicked
  // const handleTabClick = (id: string) => {
  //   console.log(`${id} tab clicked`);
  // };

  return (
    <div className="px-4 md:px-16 lg:px-36 space-y-5">
      <Header />

      <div className="sm:flex lg:hidden">
        <CustomButton
          placeholder="Dashboard Menu"
          icon={<RxHamburgerMenu />}
          iconPosition="left"
          tailwindWidth="w-fit"
          hoverColorClass=""
          selected={dashboardMenuOpen}
          onClick={() => setDashboarMenuOpen(!dashboardMenuOpen)}
        />
      </div>

      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="flex flex-col w-full lg:w-1/5 space-y-4">
          <UserProfileCard />

          {dashboardMenuOpen && (
            <NavigationPanel
              selectedNavItem={selectedNavItem}
              onNavItemClick={handleNavItemClick}
            />
          )}
        </div>

        <div className="flex-1 space-y-4">
          <StatisticsCard />

          <Personalhelper />

          {/* <Cards
            recentActivities={recentActivities}
            handleTabClick={handleTabClick}
          /> */}
        </div>
      </div>
    </div>
  );
}
