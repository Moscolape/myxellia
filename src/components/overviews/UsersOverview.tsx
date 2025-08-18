import React from "react";
import { assets } from "../../constants/assets";
import OverviewMetric from "../ui/OverviewMetric";
import OverviewCard from "../ui/OverviewCard";

const UsersOverviewCard: React.FC = () => {
  return (
    <OverviewCard
      title="Listings Overview"
      iconUrl={assets.listingsOverviewIcon}
    >
      <OverviewMetric label="Total" value="20.7k" />
      <OverviewMetric label="Riders" value="8.5k" />
      <OverviewMetric label="Subscribers" value="7.5k" />
    </OverviewCard>
  );
};

export default UsersOverviewCard;
