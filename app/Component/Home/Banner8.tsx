"use client";

import { useState } from "react";

const faqData = [
  {
    question:
      "How does Anand Rathi Group differ from traditional wealth management firms in its approach to alternative investments?",
    answer:
      "We take a research-driven approach to alternative investments, combining disciplined risk management with carefully selected opportunities.",
  },
  {
    question: "How do you source and vet the private equity opportunities presented to clients?",
    answer:
      "Each opportunity goes through detailed due diligence covering the business, management team, financials, valuation and associated risks.",
  },
  {
    question:
      "What is the minimum capital requirement to access Anand Rathi’s proprietary investment strategies?",
    answer:
      "The minimum requirement depends on the investment strategy and product selected. Our team can provide the relevant details based on the client profile.",
  },
  {
    question:
      "What is the cadence of communication between a client and their dedicated wealth management team?",
    answer:
      "Communication is tailored to the client's requirements, with regular portfolio reviews and updates whenever there are important developments.",
  },
  {
    question:
      "Can you explain the tax-optimization strategies utilized within your portfolio construction process?",
    answer:
      "Tax considerations are incorporated into portfolio construction while balancing investment objectives, liquidity requirements and risk.",
  },
  {
    question:
      "How do you incorporate ESG (Environmental, Social, and Governance) criteria into your investment selection?",
    answer:
      "ESG considerations are incorporated into the evaluation process where relevant to the investment strategy and underlying opportunity.",
  },
  {
    question:
      "How does your team handle generational wealth transfer and estate planning complexities?",
    answer:
      "We work with clients and relevant professionals to structure wealth-transfer strategies around their long-term family and financial objectives.",
  },
  {
    question:
      "What safeguards are in place to ensure the security and confidentiality of client financial data?",
    answer:
      "We follow established security and confidentiality practices designed to protect client information and financial data.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-16 xl:px-[100px]">
      {/* ================= MAIN CONTAINER ================= */}
      <div className="mx-auto w-full max-w-[1240px]">
        {/* ================= HEADING ================= */}
        <h2 className="w-full text-center font-['Abhaya_Libre'] text-[36px] leading-[1.1] font-semibold tracking-[0px] text-[#576534] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px]">
          The Questions HNIs Always Ask
        </h2>

        {/* ================= FAQ GRID ================= */}
        <div className="mt-[48px] grid w-full grid-cols-1 gap-[12px] sm:mt-[56px] md:gap-[14px] lg:grid-cols-2 lg:gap-x-[22px] lg:gap-y-[12px]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full overflow-hidden rounded-[8px] bg-[#E9E9DC] transition-all duration-300"
              >
                {/* ================= QUESTION ================= */}
                <button
                  type="button"

                  className="flex w-full items-start justify-between gap-4 px-[22px] py-[18px] text-left focus:outline-none"
                >
                  {/* Question */}
                  <span className="flex-1 font-['Abhaya_Libre'] text-[16px] leading-[26px] font-normal text-[#2B2B24] sm:text-[17px] md:text-[18px]">
                    {item.question}
                  </span>

                  {/* Plus / Minus */}
                  <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center font-['Abhaya_Libre'] text-[28px] leading-none font-normal text-[#41472D]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* ================= ANSWER ================= */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
