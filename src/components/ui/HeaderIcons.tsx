import React, { useState } from "react";
import Icon from "./Icons";
import { assets } from "../../constants/assets";
import Tooltip from "./ToolTip";
import BudgetingCard from "../modals/BudgetingCard";
import ModalOverlay from "../ModalOverlay";
import CalendarDrawer from "./Calendar";

const HeaderIcons: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="flex items-center gap-6 relative">
      <div className="relative">
        <Icon
          src={assets.bellIcon}
          alt="General Notifications Icon"
          size={32}
          className="pointer-events-none"
        />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setHoveredIcon("calculator")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Icon
          src={assets.calculatorIcon}
          alt="Calculator Icon"
          size={32}
          className="cursor-pointer"
          onClick={() => setIsBudgetModalOpen(true)}
        />
        <Tooltip text="Budgeting" isVisible={hoveredIcon === "calculator"} />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setHoveredIcon("calendar")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Icon
          src={assets.calendarIcon}
          alt="Calendar Icon"
          size={32}
          className="cursor-pointer"
          onClick={() => setIsCalendarOpen(true)}
        />
        <Tooltip text="Calendar" isVisible={hoveredIcon === "calendar"} />
      </div>

      <div className="relative">
        <Icon
          src={assets.messageIcon}
          alt="Message Notifications Icon"
          size={32}
          className="pointer-events-none"
        />
      </div>

      <ModalOverlay
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
      >
        <BudgetingCard />
      </ModalOverlay>

      <CalendarDrawer
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </div>
  );
};

export default HeaderIcons;
