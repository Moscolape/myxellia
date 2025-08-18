import React from "react";
import ListingsOverviewCard from "../overviews/ListingsOverview";
import UsersOverviewCard from "../overviews/UsersOverview";
import SalesOverviewCard from "../overviews/SalesOverview";

const Overviews: React.FC = () => {
  return (
      <main className="grid grid-cols-3 gap-6 w-full h-full pt-5">
        <SalesOverviewCard />
        <div className="flex flex-col gap-6">
          <ListingsOverviewCard />
          <UsersOverviewCard />
        </div>
      </main>
  );
};

export default Overviews;
