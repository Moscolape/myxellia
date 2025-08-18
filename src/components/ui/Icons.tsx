import React from "react";

type IconProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  onClick?: () => void;
};

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
