import React from "react";
import { motion } from "framer-motion";

interface CalendarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CalendarDrawer: React.FC<CalendarDrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed right-0 top-[5.125rem] h-full w-[400px] bg-[#111] shadow-lg z-50 overflow-y-auto"
      >
        {children}
      </motion.div>
    </>
  );
};

export default CalendarDrawer;
