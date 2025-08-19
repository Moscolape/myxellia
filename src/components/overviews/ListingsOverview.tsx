import React from 'react';
import { assets } from '../../constants/assets';
import OverviewMetric from '../ui/OverviewMetric';
import OverviewCard from '../ui/OverviewCard';

/**
 * ListingsOverviewCard Component
 *
 * Renders a card displaying statistics about listings:
 * - Total listings
 * - Active listings
 * - Archived listings
 *
 * Uses OverviewCard and OverviewMetric components for layout and metric display.
 */
const ListingsOverviewCard: React.FC = () => {
  return (
    <OverviewCard
      title="Listings Overview"
      iconUrl={assets.listingsOverviewIcon} // Icon displayed on the card header
    >
      <OverviewMetric label="Total" value="1.8k" />
      <OverviewMetric label="Active" value="80" />
      <OverviewMetric label="Archived" value="1k" />
    </OverviewCard>
  );
};

export default ListingsOverviewCard;