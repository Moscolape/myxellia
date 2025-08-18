import React from 'react';
import { assets } from '../../constants/assets';
import OverviewMetric from '../ui/OverviewMetric';
import OverviewCard from '../ui/OverviewCard';

const ListingsOverviewCard: React.FC = () => {
    return (
        <OverviewCard
          title="Listings Overview"
          iconUrl={assets.listingsOverviewIcon}
        >
          <OverviewMetric label="Total" value="1.8k" />
          <OverviewMetric label="Active" value="80" />
          <OverviewMetric label="Archived" value="1k" />
        </OverviewCard>
    );
};

export default ListingsOverviewCard;