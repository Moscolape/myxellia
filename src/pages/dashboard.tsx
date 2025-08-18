import Header from "../components/layouts/Header";
import Navigation from "../components/layouts/Navigation";
import Overviews from "../components/layouts/Overview";

const Dashboard = () => {
  return (
    <div className="font-euclid bg-[#fbfcfc]">
      <Header />
      <Navigation />
      <div className="px-12 py-5">
        <h1 className="font-semibold text-[1.25rem] font-euclid">
          Welcome, Ahmed
        </h1>
        <Overviews />
      </div>
    </div>
  );
};

export default Dashboard;
