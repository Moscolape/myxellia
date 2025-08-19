import { sliderData } from "../../data/sliderData";
import ImageSlider from "../ui/ImageSlider";

/**
 * ImagesGrid Component
 *
 * Renders a responsive grid of image sliders.
 * Each slider receives its title, text, and images from the sliderData array.
 */
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