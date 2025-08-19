import Header from "../components/layouts/Header";
import ImagesGrid from "../components/layouts/ImagesGrid";
import Navigation from "../components/layouts/Navigation";
import Overviews from "../components/layouts/Overviews";

/**
 * Dashboard Page Component
 *
 * Displays the main dashboard layout including:
 * - Top Header with branding and user actions
 * - Navigation bar
 * - Welcome message
 * - Overview cards (Sales, Listings, Users)
 * - Image grid slider
 */

const Dashboard = () => {
  return (
    <div className="font-euclid bg-[#fbfcfc]">
      {/* Top header with logo and user controls */}
      <Header />

      {/* Navigation bar below header */}
      <Navigation />

      {/* Main dashboard content */}
      <div className="px-12 pt-5 pb-10 top-[9.3125rem] relative">
        {/* Greeting message */}
        <h1 className="font-semibold text-[1.25rem] font-euclid">
          Welcome, Ahmed
        </h1>

        {/* Overview cards: Sales, Listings, Users */}
        <Overviews />

        {/* Image slider grid */}
        <ImagesGrid />
      </div>
    </div>
  );
};

export default Dashboard;