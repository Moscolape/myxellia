import React, { useState } from "react";
import Icon from "./Icons";
import { assets } from "../../constants/assets";
import Tooltip from "./ToolTip";
import BudgetingCard from "../modals/BudgetingCard";
import ModalOverlay from "../ModalOverlay";
import CalendarDrawer from "./CalendarDrawer";

interface HeaderIconButtonProps {
  src: string;
  alt: string;
  tooltip?: string;
  size?: number;
  onClick?: () => void;
}

const HeaderIconButton: React.FC<HeaderIconButtonProps> = ({
  src,
  alt,
  tooltip,
  size = 32,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        src={src}
        alt={alt}
        size={size}
        onClick={onClick}
        className={`cursor-pointer transition-transform duration-150 
          ${
            onClick ? "hover:scale-110 active:scale-95" : "pointer-events-none"
          }`}
      />

      {onClick && <Tooltip text={tooltip ?? ""} isVisible={hovered} />}
    </div>
  );
};

const HeaderIcons: React.FC = () => {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="flex items-center gap-6 relative">
      <HeaderIconButton src={assets.bellIcon} alt="General Notifications" />

      <HeaderIconButton
        src={assets.calculatorIcon}
        alt="Budgeting"
        tooltip="Budgeting"
        onClick={() => setIsBudgetModalOpen(true)}
      />

      <HeaderIconButton
        src={assets.calendarIcon}
        alt="Calendar"
        tooltip="Calendar"
        onClick={() => setIsCalendarOpen(true)}
      />

      <HeaderIconButton src={assets.messageIcon} alt="Messages" />

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
