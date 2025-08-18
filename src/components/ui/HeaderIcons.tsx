import React from "react";
import Icon from "./Icons";
import { assets } from "../../constants/assets";

const HeaderIcons: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      <Icon
        src={assets.bellIcon}
        alt="General Notifications Icon"
        size={32}
        className="pointer-events-none"
      />
      <Icon
        src={assets.calculatorIcon}
        alt="Calculator Icon"
        size={32}
        onClick={() => {}}
        className="cursor-pointer"
      />
      <Icon
        src={assets.calendarIcon}
        alt="Calendar Icon"
        size={32}
        className="pointer-events-none"
      />
      <Icon
        src={assets.messageIcon}
        alt="Message Notifications Icon"
        size={32}
        onClick={() => {}}
        className="cursor-pointer"
      />
    </div>
  );
};

export default HeaderIcons;
