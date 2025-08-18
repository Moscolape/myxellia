import React, { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000070] flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="relative z-50"
      >
        {children}
      </div>
    </div>
  );
};

export default ModalOverlay;
