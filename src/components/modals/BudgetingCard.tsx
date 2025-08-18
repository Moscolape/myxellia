import React from "react";
import { assets } from "../../constants/assets";

interface Feature {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: assets.setBudgetIcon,
    alt: "Settings Icon",
    title: "Set up annual budgets by account category",
    description: "Allocate funds across income and expense lines with full visibility."
  },
  {
    icon: assets.trackBudgetIcon,
    alt: "Tracking Icon",
    title: "Track actuals vs budget in real time",
    description: "See how your community is performing against plan, month by month."
  },
  {
    icon: assets.adjustFiguresIcon,
    alt: "Adjust Icon",
    title: "Adjust figures and forecast with ease",
    description: "Edit amounts, apply percentage changes, or roll forward last year’s data – all in one place."
  }
];

const FeatureItem: React.FC<Feature> = ({ icon, alt, title, description }) => (
  <div className="flex items-start gap-3">
    <img src={icon} alt={alt} className="w-6 h-6" />
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const BudgetingCard: React.FC = () => {
  return (
    <section className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white animate-hop">
      <div className="bg-[#0C2841] flex justify-center items-center h-48 pt-6 px-6">
        <img
          src={assets.budgetSketchImage}
          alt="Budget illustration"
          className="rounded-t-2xl"
        />
      </div>

      <div className="p-6 space-y-6">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>

      <div className="p-6 pt-0">
        <button className="w-full bg-[#18181B] text-white rounded-full py-3 font-medium hover:bg-gray-800 transition">
          Create Budget
        </button>
      </div>
    </section>
  );
};

export default BudgetingCard;