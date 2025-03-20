import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allFeatures } from "../constants/features";
import {
  carouselSettingsOne,
  carouselSettingsTwo,
} from "./other-feature-carousel";

const OtherFeatures = () => {
  return (
    <section className="bg-gradient-to-b from-[#364FF7] to-[#7441F7] text-center py-10 lg:py-40 overflow-hidden">
      <h3 className="px-4 font-medium text-[2rem] text-white lg:text-[3.875rem]">
        Check Out Other AI Features
      </h3>

      <p className="px-4 my-5 text-white text-base lg:text-xl max-w-6xl mx-auto">
        Explore a range of innovative AI tools designed to drive efficiency,
        spark creativity, and achieve optimal results for your marketing or
        advertising campaigns.
      </p>

      <div className="slider-container overflow-hidden">
        <Slider {...carouselSettingsOne}>
          {allFeatures.map((feature, id) => (
            <div className="p-4 overflow-hidden rounded-xl" key={id}>
              <div className="rounded-xl overflow-hidden">
                <div className="overflow-hidden max-h-[10.75rem]">
                  <img
                    src={feature.img}
                    alt={feature.name}
                    className="w-full"
                  />
                </div>
                <p className="bg-black text-white font-semibold text-lg py-5">
                  {feature.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider-container overflow-hidden">
        <Slider {...carouselSettingsTwo}>
          {allFeatures.map((feature, id) => (
            <div className="p-4 overflow-hidden rounded-xl" key={id}>
              <div className="rounded-xl overflow-hidden">
                <div className="overflow-hidden max-h-[10.75rem]">
                  <img
                    src={feature.img}
                    alt={feature.name}
                    className="w-full"
                  />
                </div>
                <p className="bg-black text-white font-semibold text-lg py-5">
                  {feature.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <button className="rounded-full py-[0.688rem] px-2 bg-white text-primary-500 text-[0.625rem] font-semibold lg:px-5 lg:text-sm hover:text-white hover:bg-primary-500 transition-all">
        View All AI Tools
      </button>
    </section>
  );
};

export default OtherFeatures;
