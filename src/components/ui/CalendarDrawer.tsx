import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../App.css";
import { motion } from "framer-motion";
import Icon from "./Icons";
import { assets } from "../../constants/assets";

interface CalendarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarDrawer: React.FC<CalendarDrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(drawerRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end top-[5.125rem]">
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        ref={drawerRef}
        className="relative w-[380px] h-full bg-[#1a1a1a] shadow-xl shadow-black/40 animate-slideIn"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Icon src={assets.arrowLeftIcon} alt="arrow-left" />
            <h2 className="text-white font-semibold">Calendar</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white font-bold cursor-pointer"
            title="close"
          >
            ✕
          </button>
        </div>

        <div className="p-4 text-white">
          <Calendar
            className="react-calendar"
            prevLabel="‹"
            nextLabel="›"
            prev2Label={null}
            next2Label={null}
            calendarType="hebrew"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CalendarDrawer;
