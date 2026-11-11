import Card from "./card";
import { useNavigate } from "react-router";

interface Activity {
  id: number;
  activity: string;
  timestamp: string;
}

export default function Cards({
  recentActivities,
  handleTabClick,
}: {
  recentActivities: Activity[];
  handleTabClick: (id: string) => void;
}) {
  const navigate = useNavigate();

  const navigateToHirePage = () => {
    navigate("/hire");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <Card
          title="Post a Remote Job"
          subtitle="Find and recruit remote talent"
          buttonText="Create a job ad"
          onButtonClick={() => {
            navigateToHirePage();

            /* Implement job ad creation functionality here */
          }}
        />
      </div>
      <div>
        <Card title="My Affiliates">
          <div>
            <p>Affiliate Program achievements</p>
            <div className="flex justify-between">
              <span>0 visitors</span>
              <span>0 conversion</span>
              <span>€0 earned</span>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <Card title="Recent Activities">
          {recentActivities.length > 0 ? (
            <ul>
              {recentActivities.map(activity => (
                <li key={activity.id} className="py-1">
                  {activity.activity} -{" "}
                  <span className="text-gray-600">{activity.timestamp}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>You don't have any activities logged yet.</p>
          )}
        </Card>
      </div>
      <div>
        <Card
          title="Purchases"
          tabItems={[
            {
              id: "active",
              label: "Active",
              isActive: true,
              onClick: () => handleTabClick("active"),
            },
            {
              id: "past",
              label: "Past",
              isActive: false,
              onClick: () => handleTabClick("past"),
            },
          ]}
        >
          <p>There's nothing here.</p>
        </Card>
      </div>
    </div>
  );
}
