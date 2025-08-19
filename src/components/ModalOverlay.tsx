import React, { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

/**
 * Props for ModalOverlay component
 */
interface ModalOverlayProps {
  isOpen: boolean; // Whether modal is open
  onClose: () => void; // Function to close modal
  children: React.ReactNode; // Modal content
}

/**
 * ModalOverlay Component
 *
 * Displays a modal overlay with darkened background. Closes when clicking outside the modal content.
 */
const ModalOverlay: React.FC<ModalOverlayProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, onClose); // Close modal if user clicks outside

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