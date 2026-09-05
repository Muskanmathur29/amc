import AboutusHeader from "./AboutusHeader";
import Image from "next/image";
import React from "react";

let cardsdata = [
  {
    eyebrow: "Gate 01",
    title: "Pre-Trade Risk",
    description:
      "Multi-layered quantitative and qualitative filters before any stock enters the investable universe.",
  },
  {
    eyebrow: "Gate 02",
    title: "Portfolio Risk",
    description:
      "Strict sector and single-stock exposure caps to prevent concentration vulnerability.",
  },
  {
    eyebrow: "Gate 03",
    title: "Operational Governance",
    description:
      "Institutional-grade compliance, third-party custodianship, and independent valuations.",
  },
];
export default function Banner6() {
  return (
    <div>
      <div className="mx-auto w-full max-w-[1440px] bg-[#FCF3E4] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-20 lg:py-[80px]">
        <div className="flex w-full max-w-[1180px] flex-col items-center justify-center px-5 sm:px-6 md:px-8 lg:px-[32px]">
          <AboutusHeader
            eyebrow="The Fiduciary Framework"
            title="Uncompromising Risk Governance"
            description="HNIs don't just look for returns — they look for return stability. Capital moves through three deliberate gates before it becomes part of any portfolio."
            titleSize="text-[16px]"
            heding3fontweight="font-[700]"
          />

          <div className="mx-auto mt-[25px] flex w-full max-w-[1116px] flex-col items-center justify-center pt-8 sm:pt-10 md:pt-12 lg:mt-[0px] lg:flex-row">
            {cardsdata.map((card, index) => (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className={`min-h-[181px] w-full max-w-[311px] rounded-sm border border-[#E3DCC8] bg-gradient-to-b from-white to-[#F9E1BD] px-6 py-7`}
                >
                  <span className="font-abhaya text-[15px] leading-[100%] font-normal tracking-[0%] text-[#76511D] sm:text-[16px] md:text-[17px] lg:text-[17px]">
                    {card.eyebrow}
                  </span>
                  <div className="min-h-[32px] w-full max-w-[263px] pt-2.5 sm:pt-2.5 md:pt-2.5 lg:pt-2.5">
                    <h3 className="font-abhaya w-full text-[17px] leading-[22px] font-semibold tracking-[0%] text-[#41472D] sm:text-[18px] md:text-[19.5px] lg:text-[19.5px]">
                      {card.title}
                    </h3>
                  </div>
                  <div className="font-abhaya min-h-[60px] w-full max-w-[263px] pt-2.5 sm:min-h-[65px] sm:pt-2.5 md:min-h-[70px] md:pt-2.5 lg:min-h-[73px] lg:pt-2.5">
                    <div className="font-abhaya min-h-[63px] w-full max-w-[263px] text-[14px] leading-[20.8px] font-bold tracking-[0%] text-[#46483D] sm:text-[15px] md:text-[16px] lg:text-[16px]">
                      {/* Multi-layered quantitative and qualitative filters before any stock enters the
                      investable universe. */}
                      {card.description}
                    </div>
                  </div>
                </div>
                {index < cardsdata.length - 1 && (
                  <div className="flex min-h-[181px] w-full max-w-[33px] flex-col items-center justify-center px-1.5">
                    <span className="text-[22px] leading-[100%] font-normal tracking-[0%] text-[#B07636]">
                      <Image
                        width={212}
                        height={157}
                        src="/assests/About-us/arrow.svg"
                        alt="icon"
                        className="rotate-90 lg:-rotate-0"
                      />
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
