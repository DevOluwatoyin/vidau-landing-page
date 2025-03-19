import { features } from "../constants/about";

const AboutVidAu = () => {
  return (
    <section className="py-10 px-5 bg-white">
      <h2 className="text-[2rem] text-center text-purple-100 my-4 font-semibold md:text-7xl md:max-w-3xl mx-auto md:mb-8">
        The Most Useful AI Avatar Online Service
      </h2>

      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 md:flex-row">
          <div
            className="bg-[#5f34ea29] rounded-xl p-8 space-y-3"
            key={features[0].subtitle}
          >
            <p className="text-[#6157FF] font-semibold text-[1.25rem] lg:text-[28px]">
              {features[0].title}
            </p>
            <p className="text-[0.938rem] text-[#000014] lg:text-xl">
              {features[0].subtitle}
            </p>

            <div className="max-w-[7.063rem]">
              <img src={features[0].icon} alt={features[0].subtitle} />
            </div>
          </div>

          <div
            className="bg-[#5f34ea29] rounded-xl p-8 space-y-3"
            key={features[1].subtitle}
          >
            <p className="text-[#6157FF] font-semibold text-[1.25rem] lg:text-[28px]">
              {features[1].title}
            </p>
            <p className="text-[0.938rem] text-[#000014] lg:text-xl">
              {features[1].subtitle}
            </p>

            <div className="max-w-[7.063rem]">
              <img src={features[1].icon} alt={features[0].subtitle} />
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-col md:flex-row">
          <div
            className="bg-[#5f34ea29] rounded-xl p-8 space-y-3"
            key={features[2].subtitle}
          >
            <p className="text-[#6157FF] font-semibold text-[1.25rem] lg:text-[28px]">
              {features[2].title}
            </p>
            <p className="text-[0.938rem] text-[#000014] lg:text-xl">
              {features[2].subtitle}
            </p>

            <div className="max-w-[7.063rem]">
              <img src={features[2].icon} alt={features[0].subtitle} />
            </div>
          </div>

          <div
            className="bg-[#5f34ea29] rounded-xl p-8 space-y-3"
            key={features[3].subtitle}
          >
            <p className="text-[#6157FF] font-semibold text-[1.25rem] lg:text-[28px]">
              {features[3].title}
            </p>
            <p className="text-[0.938rem] text-[#000014] lg:text-xl">
              {features[3].subtitle}
            </p>

            <div className="max-w-[7.063rem]">
              <img src={features[3].icon} alt={features[0].subtitle} />
            </div>
          </div>
        </div>

        {/* {features.map((each) => (
          <div
            className="bg-[#5f34ea29] rounded-xl p-8 space-y-3"
            key={each.subtitle}
          >
            <p className="text-[#6157FF] font-semibold text-[1.25rem]">
              {each.title}
            </p>
            <p className="text-[0.938rem] text-[#000014]">{each.subtitle}</p>

            <div className="max-w-[7.063rem]">
              <img src={each.icon} alt={each.subtitle} />
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default AboutVidAu;
