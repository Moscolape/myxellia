import { sliderData } from "../../data/sliderData";
import ImageSlider from "../ui/ImageSlider";

const ImagesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
      {sliderData.map((slider, index) => (
        <ImageSlider
          key={index}
          title={slider.title}
          text={slider.text}
          images={slider.images}
          interval={3000}
        />
      ))}
    </div>
  );
};

export default ImagesGrid;