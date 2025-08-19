import React from "react";
import { assets } from "../../constants/assets";
import OverviewMetric from "../ui/OverviewMetric";
import OverviewCard from "../ui/OverviewCard";

/**
 * UsersOverviewCard Component
 *
 * Displays a card summarizing user statistics:
 * - Total users
 * - Riders
 * - Subscribers
 *
 * Uses OverviewCard and OverviewMetric components for layout and metric display.
 */
const UsersOverviewCard: React.FC = () => {
  return (
    <OverviewCard
      title="Users Overview"
      iconUrl={assets.usersOverviewIcon} // Icon displayed on the card header
    >
      <OverviewMetric label="Total" value="20.7k" />
      <OverviewMetric label="Riders" value="8.5k" />
      <OverviewMetric label="Subscribers" value="7.5k" />
    </OverviewCard>
  );
};

export default UsersOverviewCard;