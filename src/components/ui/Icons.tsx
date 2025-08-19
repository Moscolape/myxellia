import React from "react";

/**
 * Props for Icon component
 */
type IconProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  onClick?: () => void;
};

/**
 * Icon Component
 *
 * Simple reusable image component for icons with optional size, className, and click handling.
 */
const Icon: React.FC<IconProps> = ({ src, alt, size, onClick, className }) => (
  <img
    src={src}
    alt={alt}
    width={size}
    height={size}
    onClick={onClick}
    className={className}
  />
);

export default Icon;
