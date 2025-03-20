import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { agents } from "../constants/ai-agents";

const HeroSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerPadding: "40px",
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="px-4 text-center bg-hero-pattern">
      <div className="space-y-4 text-center py-8">
        <h1 className="font-medium text-[2rem] text-white lg:text-[6.5rem] max-w-5xl mx-auto lg:leading-[8.5rem]">
          AI Virtual Avatars Generator for Professional Videos
        </h1>

        <p className="text-xs leading-[0.938rem] text-white tracking-[-0.031rem] px-5 lg:text-[1.5rem] lg:leading-[2rem] lg:max-w-4xl mx-auto w-full">
          Employ over 40 AI avatars to enhance your video content. Add a human
          touch to your videos with lifelike AI avatars by VidAU.
        </p>

        <div className="flex items-center gap-4 justify-center lg:py-8">
          <button className="rounded-full py-2 px-4 bg-white text-primary-main text-xs font-medium lg:px-10 lg:py-6 lg:text-sm lg:text-[1.5rem]">
            See all 40+ AI Avatars
          </button>
          <button className="rounded-full py-2 px-4 text-white border border-white text-xs lg:px-10 lg:py-6 lg:text-sm lg:text-[1.5rem]">
            Create your Avatar
          </button>
        </div>
      </div>

      <div className="slider-container overflow-hidden py-10 lg:pb-20">
        <Slider {...settings}>
          {agents.map((agent, id) => (
            <div
              className="px-4 overflow-hidden rounded-xl relative group cursor-pointer group"
              key={id}
            >
              <img src={agent.img} alt={agent.name} className="w-full" />
              <div className="absolute hidden group-hover:flex flex-col w-full h-full top-0 items-center justify-between px-10 py-6 transition-all">
                <img
                  src="/images/volume.svg"
                  alt="speaker"
                  className="self-end w-10"
                />

                <button className="rounded-full font-medium text-[#F0F2F4] border border-white to-white text-xs lg:text-base px-4 py-2  bg-transparent backdrop-blur-md">
                  {agent.name}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
