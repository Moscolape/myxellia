import React from "react";
import { assets } from "../../constants/assets";

const BudgetingCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="bg-[#0C2841] flex justify-center items-center h-48 pt-6 px-6">
        <img
          src={assets.budgetSketchImage}
          alt="Calculator"
          className="rounded-t-2xl"
        />
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-start gap-3">
          <img src={assets.setBudgetIcon} alt="Settings" className="w-6 h-6" />
          <div>
            <h3 className="font-semibold text-gray-900">
              Set up annual budgets by account category
            </h3>
            <p className="text-[0.75rem] text-gray-600">
              Allocate funds across income and expense lines with full
              visibility.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img src={assets.trackBudgetIcon} alt="Chat" className="w-6 h-6" />
          <div>
            <h3 className="font-semibold text-gray-900">
              Track actuals vs budget in real time
            </h3>
            <p className="text-[0.75rem] text-gray-600">
              See how your community is performing against plan, month by month.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img src={assets.adjustFiguresIcon} alt="Chart" className="w-6 h-6" />
          <div>
            <h3 className="font-semibold text-gray-900">
              Adjust figures and forecast with ease
            </h3>
            <p className="text-[0.75rem] text-gray-600">
              Edit amounts, apply percentage changes, or roll forward last
              year’s data – all in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button className="w-full bg-[#18181B] text-white rounded-full py-3 font-medium hover:bg-gray-800 transition">
          Create Budget
        </button>
      </div>
    </div>
  );
};

export default BudgetingCard;
