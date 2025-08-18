import Header from "../components/layouts/Header";
import ImagesGrid from "../components/layouts/Images";
import Navigation from "../components/layouts/Navigation";
import Overviews from "../components/layouts/Overview";

const Dashboard = () => {
  return (
    <div className="font-euclid bg-[#fbfcfc]">
      <Header />
      <Navigation />
      <div className="px-12 py-10 top-[4.1875rem] relative">
        <h1 className="font-semibold text-[1.25rem] font-euclid">
          Welcome, Ahmed
        </h1>
        <Overviews />
        <ImagesGrid />
      </div>
    </div>
  );
};

export default Dashboard;
