
const Testimonial = ({ percentage, title, description, name, role, stars = 5 }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm">
      <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{percentage}</div>
      <div className="text-sm font-medium text-blue-400 mb-3">{title}</div>
      <p className="text-center text-sm mb-4">{description}</p>
      
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 mr-3">
          {/* Placeholder for avatar */}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-600">{role}</div>
        </div>
      </div>
      
      <div className="flex mt-2">
        {[...Array(stars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      percentage: "95%",
      title: "Cost Reduction",
      description: "Creating video ads costs quite a lot. Both financially and human power. Ever since I subscribed to VidAU AI, I've been creating AI video advertising almost by "making a wish". I think VidAU is my Genie.",
      name: "Grace",
      role: "Social Media Manager"
    },
    {
      percentage: "45%",
      title: "Conversion Increase",
      description: "We experience increased conversions on video ads created on VidAU. VidAU videos Guarantees high engagement among TikTok and Insta ad platforms algorithm friendly.",
      name: "Lowrey",
      role: "Marketing Agency Co-founder"
    },
    {
      percentage: "5x",
      title: "Efficiency",
      description: "It took me days to shoot and then edit one video. But now, with VidAU AI, I can create as many AI video advertising content I want in one day.",
      name: "Amir",
      role: "YouTube Vlogger"
    },
    {
      percentage: "40%",
      title: "ROI",
      description: "Cost of Video content creation has dropped by over 80% since we started using VidAU AI Solutions. As a result, ROI on marketing spend has taken an upward curve.",
      name: "Bennett",
      role: "Chief Marketing Officer"
    },
    {
      percentage: "90%",
      title: "Time Savings",
      description: "Managing a full content calendar used to feel overwhelming, but VidAU has completely transformed our workflow. I can now generate high-quality videos in minutes, saving 90% of the time we used to spend on production. It's a game-changer for any team.",
      name: "Sophie",
      role: "Content Strategist"
    },
    {
      percentage: "87%",
      title: "Cost Reduction",
      description: "Producing video content was always our biggest expense, but VidAU has cut our costs by over 87%. The customizable templates and AI features make it so easy to produce ads that perform well across platforms.",
      name: "Isabella",
      role: "Digital Marketer"
    },
    {
      percentage: "80%",
      title: "Productivity Boost",
      description: "As a solo content creator, time is everything. VidAU allows me to focus on my ideas while it handles the video production. I've increased my productivity by 80% and can now post content almost daily.",
      name: "Daniel",
      role: "Content Creator"
    },
    {
      percentage: "90%",
      title: "Faster Editing",
      description: "VidAU's AI video generator has cut my editing time by 90%. The transitions, effects, and templates make the process seamless, and the final product always looks professional. It's an essential tool for my workflow.",
      name: "James",
      role: "Freelance Videographer"
    },
    {
      percentage: "35%",
      title: "Sales Growth",
      description: "VidAU's AI tools have helped us create stunning product ads that resonate with our customers. Since adopting it, we've seen a 35% increase in sales, thanks to the engaging and professional videos.",
      name: "Liam",
      role: "Digital Marketer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-8">What Our Customers Say</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              percentage={item.percentage}
              title={item.title}
              description={item.description}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;