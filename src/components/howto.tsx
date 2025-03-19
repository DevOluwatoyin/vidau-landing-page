const HowTo = () => {
  return (
    <section className="bg-white py-10 px-4 text-center lg:bg-primary-500 lg:py-20">
      <h3 className="text-[2rem] text-center text-purple-100 my-4 font-semibold md:text-7xl md:max-w-3xl mx-auto md:mb-8 lg:text-white">
        How to generate videos with AI avatar?
      </h3>

      <div className="flex flex-col gap-6 px-4 justify-center md:flex-row md:mt-10">
        <div className="bg-[#EDF0FF] rounded-xl p-4 flex flex-col items-center py-10 justify-between gap-10 lg:px-10 lg:items-start lg:bg-primary-200 lg:gap-5">
          <span className="font-thin text-[4rem] text-[#7859F6]">01.</span>

          <span className="font-medium text-[1.483rem] text-[#02015A] text-center max-w-[14rem] lg:text-left lg:text-white lg:text-3xl">
            Choose / Customise Avatar
          </span>

          <img src="/images/group_1.svg" alt="users" className="lg:hidden" />

          <div className="w-52 hidden lg:flex">
            <img src="/images/group_3.svg" alt="users" className="w-full" />
          </div>
        </div>

        <div className="bg-[#EDF0FF] rounded-xl p-4 flex flex-col items-center py-10 justify-between gap-10 lg:px-10 lg:items-start lg:bg-primary-200 lg:gap-5">
          <span className="font-thin text-[4rem] text-[#7859F6]">02.</span>

          <span className="font-medium text-[1.483rem] text-[#02015A] text-center max-w-[14rem] lg:text-left lg:text-white lg:text-3xl">
            Write a Script
          </span>

          <img src="/images/chat.svg" alt="chat" className="lg:hidden" />
          <img
            src="/images/chat_2.svg"
            alt="chat"
            className="hidden lg:flex w-52"
          />
        </div>

        <div className="bg-[#5F34EA] rounded-xl p-4 text-white flex flex-col items-center py-10 lg:bg-white justify-between gap-10 lg:px-10 lg:gap-5 lg:items-start">
          <span className="font-thin text-[4rem] text-[#7859F6]">03.</span>

          <span className="font-medium text-[1.483rem] text-[#02015A] lg:text-purple-100 lg:text-3xl max-w-[14rem] lg:text-left">
            Generate your Video
          </span>

          <img src="/images/group_2.svg" alt="chat" className="lg:w-40" />
        </div>
      </div>

      <button className="rounded-full w-fit py-2 px-4 gap-4 mt-4 text-white text-xs lg:px-10 lg:py-6 lg:text-[1.5rem] bg-[#3458FF] mx-auto lg:text-2xl lg:mt-10">
        Try AI Video Editor
      </button>
    </section>
  );
};

export default HowTo;
