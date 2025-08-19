import React, { useState } from "react";
import Icon from "./Icons";
import { assets } from "../../constants/assets";
import Tooltip from "./ToolTip";
import BudgetingCard from "../modals/BudgetingCard";
import ModalOverlay from "../ModalOverlay";
import CalendarDrawer from "./CalendarDrawer";

/**
 * Props for a single icon button in the header
 */
interface HeaderIconButtonProps {
  src: string;
  alt: string;
  tooltip?: string;
  size?: number;
  onClick?: () => void;
}

/**
 * HeaderIconButton Component
 *
 * Displays an icon in the header with optional tooltip and click handling.
 */
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
          ${onClick ? "hover:scale-110 active:scale-95" : "pointer-events-none"}`}
      />

      {/* Tooltip displayed on hover if clickable */}
      {onClick && <Tooltip text={tooltip ?? ""} isVisible={hovered} />}
    </div>
  );
};

/**
 * HeaderIcons Component
 *
 * Contains all interactive header icons such as notifications, calculator, calendar, and messages.
 * Opens modals or drawers when specific icons are clicked.
 */
const HeaderIcons: React.FC = () => {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="flex items-center gap-6 relative">
      <HeaderIconButton src={assets.bellIcon} alt="General Notifications" />

      <HeaderIconButton
        src={assets.calculatorIcon}
        alt="Calculator Icon"
        tooltip="Budgeting"
        onClick={() => setIsBudgetModalOpen(true)}
      />

      <HeaderIconButton
        src={assets.calendarIcon}
        alt="Calendar Icon"
        tooltip="Calendar"
        onClick={() => setIsCalendarOpen(true)}
      />

      <HeaderIconButton src={assets.messageIcon} alt="Messages" />

      {/* Budget modal */}
      <ModalOverlay
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
      >
        <BudgetingCard />
      </ModalOverlay>

      {/* Calendar drawer */}
      <CalendarDrawer
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </div>
  );
};

export default HeaderIcons;
