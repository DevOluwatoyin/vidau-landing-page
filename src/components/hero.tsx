const HeroSection = () => {
  return (
    <section className="px-4 text-center">
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
    </section>
  );
};

export default HeroSection;
