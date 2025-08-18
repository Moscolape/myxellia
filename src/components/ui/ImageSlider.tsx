import React, { useState, useEffect } from "react";

interface ImageSliderProps {
  title: string;
  text: string;
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  title,
  text,
  images,
  interval = 3000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[17.875rem] overflow-hidden rounded-xl">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={src} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#00000060] bg-opacity-50"></div>
          <div className="absolute bottom-6 left-4 text-white">
            <h3 className="text-sm font-bold">{title}</h3>
            <p className="text-lg">{text}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
