import { useState } from "react";
import { faqData } from "../constants/faq";

const AccordionChild = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => setOpen(!open);

  return (
    <div className="mb-2 border rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-100 transition-all"
        onClick={() => toggleAccordion()}
      >
        <span className="font-semibold">{question}</span>
        {open ? (
          <img src="/images/remove-ring.svg" alt="close accordion" />
        ) : (
          <img src="/images/add-ring.svg" alt="add accordion" />
        )}
      </button>
      {open && <div className="p-4 bg-white text-gray-footer">{answer}</div>}
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  return (
    <div className="bg-[#F8F8F9] py-10 min-h-screen lg:bg-testimonial-pattern lg:py-40">
      <h2 className="font-medium text-center mb-5 text-[2rem] lg:text-[4.795rem]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto p-5">
        {faqData.map((item, index) => (
          <AccordionChild
            answer={item.answer}
            question={item.question}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
