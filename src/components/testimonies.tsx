import { testimonials } from "../constants/testimonials";

const TestimonialCard = ({
  percentage,
  title,
  description,
  name,
  role,
  img,
  style,
}: {
  percentage: string;
  title: string;
  description: string;
  name: string;
  role: string;
  img: string;
  style?: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center p-4 rounded-[1.255rem] bg-white  backdrop-blur-sm flex-[1_0_289px] ${
        style && style
      }`}
    >
      <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-2">
        {percentage}
      </div>
      <div className="text-sm font-medium text-primary-500 mb-3">{title}</div>
      <p
        className={`text-center text-sm mb-4 ${
          style && "opacity-40 lg-opacity-100"
        }`}
      >
        {description}
      </p>

      <div
        className={`flex items-center mt-auto ${
          style && "opacity-30 lg-opacity-100"
        }`}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 mr-3">
          <img src={img} alt={name} />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-600">{role}</div>
        </div>
      </div>

      <img
        src="/images/rating.svg"
        alt="rating"
        className={`${style && "opacity-20 lg-opacity-100"}`}
      />
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-testimonial-pattern p-4 py-10 md:py-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Customer stories
        </h1>

        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-6 md:mt-12">
              <TestimonialCard {...testimonials[0]} />

              <TestimonialCard {...testimonials[3]} />

              <TestimonialCard {...testimonials[6]} />
            </div>

            <div className="space-y-6 md:mt-0">
              <TestimonialCard {...testimonials[1]} />

              <TestimonialCard {...testimonials[4]} />

              <TestimonialCard {...testimonials[7]} />

              <TestimonialCard {...testimonials[9]} />
            </div>

            <div className="space-y-6 md:mt-12">
              <TestimonialCard {...testimonials[2]} />

              <TestimonialCard {...testimonials[5]} />

              <TestimonialCard {...testimonials[8]} />
            </div>
          </div>

          <button className="rounded-full py-2 px-4 flex items-center gap-4 mt-4 text-white text-xs lg:px-10 lg:py-6 lg:text-sm lg:text-[1.5rem] bg-[#3458FF] lg:hidden w-full mx-auto">
            <img src="/images/group_user.svg" alt="group user" />
            <span>Trusted by 1,700,000+ users</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
