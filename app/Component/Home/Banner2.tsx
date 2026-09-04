import Banner from "../../assests/Banner2ImageContainer.svg";
import Image from "next/image";
import icon1 from "../../assests/bannne2icon1.svg";
import icon2 from "../../assests/banner2icon2.svg";
import icon3 from "../../assests/bannner2icon3.svg";
export default function Banner2() {
  return (
    <>
      <div className="h-full w-full bg-white px-5 pt-[48px] pb-[48px] sm:px-8 md:px-12 lg:min-h-[766px] lg:px-[100px]">
        <div className="mx-auto flex min-h-[619px] w-full max-w-[1240px] flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex h-full w-full items-center justify-center gap-[10px] sm:py-[0px] md:py-[20px] lg:w-[544px] lg:py-[50px]">
            {/* <Image
              src="/assests/Banner2ImageContainer.svg"
              width={544}
              height={619}

              alt="Banner"
            /> */}

            <div className="aspect-[544/619] h-auto w-full max-w-[544px] rounded-xl bg-[url('/assests/Banner2ImageContainer.svg')] bg-cover bg-center bg-no-repeat shadow-[0px_8px_10px_0px_#00000040]">
              {/* content */}
            </div>
          </div>
          <div className="flex w-full flex-col gap-[6px] px-3 py-3 sm:min-h-0 sm:px-[10px] sm:py-[0px] lg:min-h-[619px] lg:w-[696px] lg:px-[40px] lg:py-[20px]">
            <div className="h-auto min-h-0 w-full md:w-[616px] lg:h-[127px] lg:min-h-[127px] lg:w-[616px]">
              {/* HEADER AREA */}
              <div className="flex h-auto w-full flex-col items-start justify-start gap-[8px] md:flex-row md:items-center md:gap-[12px] lg:h-[37px] lg:w-[616px] lg:flex-row lg:items-center lg:gap-[12px]">
                {/* CREAM LABEL */}
                <div className="flex h-auto min-h-[36px] w-full shrink-0 items-center justify-center rounded-sm bg-[#F9E1BD] px-[16px] py-[3px] sm:w-[368px] lg:h-[36px]">
                  <p className="font-abhaya text-center text-[18px] leading-[30px] font-bold tracking-[0%] whitespace-normal text-[#76511D] sm:text-[20px] sm:whitespace-nowrap lg:text-[24px]">
                    Our Flagship Alternative Strategy
                  </p>
                </div>
                {/* DIVIDER */}
                <div className="h-[1px] w-[140px] shrink-0 bg-[#76511D] sm:w-[236px] lg:w-[236px]" />{" "}
              </div>

              {/* TITLE */}
              <div className="w-ful mt-[10px] h-auto lg:mt-0 lg:h-[90px] lg:w-[616px]">
                <h2 className="font-abhaya text-[28px] leading-[115%] font-bold tracking-[0%] text-[#41472D] sm:text-[32px] lg:text-[38px] lg:leading-[45px]">
                  Anand Rathi Multi Strategy —
                  <br />
                  Scheme 1
                </h2>
              </div>
            </div>

            <div className="flex w-full flex-col">
              <p className="font-abhaya leading-[26px] font-normal tracking-normal sm:pb-[13px] sm:text-[14px] md:text-[18px] lg:pb-[20px] lg:text-[22px]">
                A Category III AIF built anticipating skills in its expectations to compound wealth
                across market cycles.{" "}
              </p>

              <p className="font-abhaya leading-[26px] font-normal tracking-normal sm:text-[14px] md:text-[18px] lg:text-[22px]">
                {" "}
                The fund takes a disciplined, sector-agnostic approach to India's equity opportunity
                blending value and growth investing so the portfolio holds up in volatility and
                still captures long-term upside.{" "}
              </p>
            </div>

            <div className="sm:gap[10px] md:gap[10px] mt-[14px] flex h-auto w-full items-start gap-[6px] opacity-100 md:mt-[17px] md:gap-[8px] lg:mt-[20px] lg:h-[117px] lg:w-[616px] lg:gap-[14px]">
              <Image
                width={38}
                height={39}
                src="/assests/bannne2icon1.svg"
                alt="icon"
                className=" "
              />

              <div>
                <div className="h-auto w-auto opacity-100 lg:h-[30px] lg:w-[219px]">
                  <p className="font-abhaya text-[18px] leading-[30px] font-bold tracking-[0%] text-[#41472D] md:text-[24px] lg:text-[28px]">
                    The 4P Stock Filter
                  </p>
                </div>

                <div className="h-auto w-auto opacity-100 lg:h-[84px] lg:w-[564px]">
                  <p className="font-['Abhaya_Libre'] leading-[28px] font-normal tracking-[0%] text-[#1A1A10] sm:text-[16px] md:text-[18px] lg:text-[22px]">
                    Focused on Past performance, Present financials, Pedigree of management, and
                    Potential for growth before it enters the portfolio.
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:gap[10px] md:gap[10px] mt-[14px] flex h-auto w-full items-start gap-[6px] opacity-100 md:mt-[17px] md:gap-[8px] lg:mt-[20px] lg:h-[117px] lg:w-[616px] lg:gap-[14px]">
              <Image
                src="/assests/banner2icon2.svg"
                width={38}
                height={39}
                alt="icon"
                className=" "
              />

              <div>
                <div className="h-auto w-auto w-full opacity-100 lg:h-[30px] lg:w-[564px]">
                  <p className="font-abhaya text-[18px] leading-[30px] font-bold tracking-[0%] text-[#41472D] md:text-[24px] lg:text-[28px]">
                    Long Only, Multi-Cap Equity
                  </p>
                </div>

                <div className="h-auto w-auto opacity-100 lg:h-[84px] lg:w-[564px]">
                  <p className="font-['Abhaya_Libre'] leading-[28px] font-normal tracking-[0%] text-[#1A1A10] sm:text-[16px] md:text-[18px] lg:text-[22px]">
                    With tactical hedges to manage downside, never a net short book.
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:gap[10px] md:gap[10px] mt-[14px] flex h-auto w-full items-start gap-[6px] opacity-100 md:mt-[17px] md:gap-[8px] lg:mt-[20px] lg:h-[117px] lg:w-[616px] lg:gap-[14px]">
              <Image
                src="/assests/bannner2icon3.svg"
                width={38}
                height={39}
                alt="icon"
                className=" "
              />

              <div>
                <div className="h-auto w-auto w-full opacity-100 lg:h-[30px] lg:w-[564px]">
                  <p className="font-abhaya text-[18px] leading-[30px] font-bold tracking-[0%] text-[#41472D] md:text-[24px] lg:text-[28px]">
                    India's Growth Pillars
                  </p>
                </div>

                <div className="h-auto w-auto opacity-100 lg:h-[84px] lg:w-[564px]">
                  <p className="font-['Abhaya_Libre'] leading-[28px] font-normal tracking-[0%] text-[#1A1A10] sm:text-[16px] md:text-[18px] lg:text-[22px]">
                    Positioned across Manufacturing, New Age Technology, Consumption, and Financial
                    Inclusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
