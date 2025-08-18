import React from "react";

type IconProps = {
  src: string;
  alt: string;
  size?: number;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ src, alt, size, onClick }) => (
  <img src={src} alt={alt} width={size} height={size} onClick={onClick} className="cursor-pointer"/>
);

export default Icon;
