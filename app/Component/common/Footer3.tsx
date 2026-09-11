"use client";
import Image from "next/image";
import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Footer3() {
  let Images = [
    { image: "/assests/LinkedinFooter.svg" },
    { image: "/assests/Facebook.svg" },
    { image: "/assests/LinkedIn.png" },
    { image: "/assests/Link - Instagram.svg" },
  ];

  const [showdisclamair, setshowdisclamair] = useState(false);
  return (
    <div>
      <section className="h-auto w-full bg-gradient-to-b from-[#576534] to-[#41472D] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:min-h-[850px] lg:px-16 lg:py-20 xl:px-20 xl:py-20 2xl:px-[100px] 2xl:py-20">
        <div className="mx-auto min-h-[500px] w-full max-w-[1240px] sm:min-h-[580px] md:min-h-[650px] lg:min-h-[720px] xl:min-h-[811px]">
          <div className="flex w-full max-w-[1240px] flex-col gap-4 pb-8 sm:pb-10 md:pb-12 lg:flex-row lg:justify-between lg:pb-16 xl:min-h-[379px]">
            <div className="flex min-h-[260px] w-full max-w-[390px] flex-col gap-2 pr-4 sm:min-h-[275px] sm:gap-5 sm:pr-5 md:min-h-[290px] md:gap-[22px] md:pr-6 lg:min-h-[315px] lg:gap-5 lg:gap-[23.3px] lg:pr-8">
              <Image
                src="/assests/Aritfooterlogo.svg"
                alt="Logo"
                width={180}
                height={50}
                priority
                className="h-auto w-full object-contain"
              />

              <div className="min-h-[80px] w-full max-w-[384px] opacity-90 sm:min-h-[88px] md:min-h-[96px] lg:min-h-[104px]">
                <p className="font-abhaya h-auto w-full max-w-[358px] text-center text-[16px] leading-[22px] font-normal tracking-[0%] text-white md:text-[18px] md:leading-[24px] lg:text-start lg:text-[20px] lg:leading-[26px]">
                  Authoritative wealth management for the global Indian citizen. Authorized and
                  regulated by the Financial Services Authority.
                </p>
              </div>
              <div className="flex min-h-[40px] w-full max-w-[358px] pt-2 sm:min-h-[42px] sm:pt-2 md:min-h-[45px] md:pt-[8.7px] lg:min-h-[46.7px] lg:flex-row lg:pt-[8.7px]">


                {Images.map((element, index) => (
                  <div
    key={index}
    className="flex min-h-[32px] w-full max-w-[54px] flex-col pl-3 sm:min-h-[34px] sm:pl-3.5 md:min-h-[36px] md:pl-4 lg:min-h-[38px] lg:flex-row lg:pl-4"
  >
    <div
      className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#FCF3E4] p-2 sm:h-[34px] sm:w-[34px] md:h-[36px] md:w-[36px] lg:h-[38px] lg:w-[38px]"
    >


                      <Image
                        src={element.image}
                        alt="Logo"
                        width={180}
                        height={50}
                        priority
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-auto w-full max-w-[129px] flex-col gap-2 border-l border-white/10 pt-3 pb-4 pl-4 sm:min-h-[275px] sm:pl-5 md:min-h-[295px] md:pt-0 md:pb-0 md:pl-6 lg:min-h-[315px] lg:pl-8">
              <div className="min-h-[24px] w-full max-w-[96px] sm:min-h-[25px] md:min-h-[27px] lg:min-h-[28px]">
                <p className="font-abhaya h-auto w-full max-w-[96px] text-[15px] leading-[22px] font-normal tracking-[0%] text-[#FCF3E4] sm:text-[16px] sm:leading-[24px] md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[28px]">
                  COMPANY
                </p>
              </div>

              <div className="h-[2px] w-full bg-[#FCF3E4] lg:w-[32px]"></div>

              <div className="flex min-h-[100px] w-full max-w-[96px] flex-col gap-3 pt-1 sm:min-h-[108px] sm:gap-3.5 sm:pt-1 md:min-h-[116px] md:gap-4 md:pt-4 lg:min-h-[125px] lg:gap-4 lg:pt-4">
                <div className="flex h-[24px] w-full max-w-[96px] items-center justify-between sm:h-[25px] md:h-[26px] lg:h-[28px]">
                  <div className="h-[18px] w-[40px] sm:h-[19px] sm:w-[44px] md:h-[20px] md:w-[48px] lg:h-[21px] lg:w-[50px]">
                    <p className="font-abhaya h-auto w-full max-w-[50px] text-[15px] leading-[100%] font-normal text-[#FFFFFF] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                      Carrer
                    </p>
                  </div>

                  <div className="h-[22px] w-[3px] sm:h-[24px] sm:w-[4px] md:h-[26px] md:w-[4px] lg:h-[28px] lg:w-[5px]">
                    <p className="font-abhaya w-full align-middle text-[15px] leading-[23px] font-normal tracking-[0%] text-[#FCF3E4] sm:text-[16px] sm:leading-[25px] md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[28px]">
                      ›
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[18px] w-full max-w-[151px] gap-2 sm:min-h-[19px] md:min-h-[20px] lg:min-h-[21px] lg:gap-[3px]">
                  <div className="h-auto min-h-[18px] w-full max-w-[134px] sm:min-h-[19px] md:min-h-[20px] lg:min-h-[21px]">
                    <div className="font-abhaya h-auto w-full max-w-[134px] text-[15px] leading-[100%] font-normal text-white sm:text-[16px] md:text-[17px] lg:text-[18px]">
                      Group Companies
                    </div>
                  </div>

                  <div className="h-[10px] w-[10px] sm:h-[11px] sm:w-[11px] md:h-[12px] md:w-[12px] lg:h-[14px] lg:w-[14px]">
                    <div className="absolute top-[4px] left-[1px] h-[4px] w-[8px] border-[1.5px] border-white sm:top-[4px] sm:left-[1.5px] sm:h-[4px] sm:w-[8px] md:top-[4.5px] md:left-[2px] md:h-[4.5px] md:w-[9px] lg:top-[4.5px] lg:left-[2px] lg:h-[5px] lg:w-[10px]">
                      {/* <FaChevronDown className="text-[#FFFFFF]" /> */}
                      <FaAngleDown />
                    </div>
                  </div>
                </div>

                <div className="flex h-[24px] w-full max-w-[96px] items-center justify-between sm:h-[25px] md:h-[26px] lg:h-[28px]">
                  <div className="min-h-[18px] w-full max-w-[83px] sm:min-h-[19px] md:min-h-[20px] lg:min-h-[21px]">
                    <div className="font-abhaya h-auto w-full max-w-[83px] text-[15px] leading-[100%] font-normal text-white sm:text-[16px] md:text-[17px] lg:text-[18px]">
                      Downloads
                    </div>
                  </div>

                  <div className="h-[22px] w-[3px] sm:h-[24px] sm:w-[4px] md:h-[26px] md:w-[4px] lg:h-[28px] lg:w-[5px]">
                    <div className="font-abhaya min-h-[22px] w-[3px] align-middle text-[15px] leading-[23px] font-normal text-[#FCF3E4] sm:min-h-[24px] sm:w-[4px] sm:text-[16px] sm:leading-[25px] md:min-h-[26px] md:text-[17px] md:leading-[26px] lg:min-h-[28px] lg:w-[5px] lg:text-[18px] lg:leading-[28px]">
                      ›
                    </div>
                  </div>
                </div>

                {/*  */}
              </div>
            </div>

            <div className="flex min-h-[150px] w-full max-w-[162.5px] flex-col gap-2 border-l border-white/10 pl-4 sm:min-h-[275px] sm:pl-5 md:min-h-[295px] md:pl-6 lg:min-h-[315.3px] lg:pl-8">
              <div className="h-[24px] w-full sm:h-[25px] md:h-[26px] lg:h-[28px] lg:max-w-[129.5px]">
                <div className="font-abhaya h-auto w-full max-w-[129.5px] align-middle text-[15px] leading-[23px] font-normal text-[#FCF3E4] sm:text-[16px] sm:leading-[24px] md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[28px]">
                  COMPLIANCE
                </div>
                <div className="h-[2px] w-full bg-[#FCF3E4] md:w-[30px] lg:w-[32px]"></div>
                <div className="flex min-h-[72px] w-full max-w-[129.5px] flex-col gap-3 pt-3 sm:min-h-[76px] sm:gap-3.5 sm:pt-3.5 md:min-h-[82px] md:gap-4 md:pt-4 lg:min-h-[88px] lg:gap-4 lg:pt-4">
                  <div className="flex h-[24px] w-full max-w-[129.5px] items-center justify-between sm:h-[25px] md:h-[26px] lg:h-[28px]">
                    <div className="min-h-[18px] w-full max-w-[85px] sm:min-h-[19px] md:min-h-[20px] lg:min-h-[21px]">
                      <div className="font-abhaya h-auto w-full max-w-[85px] text-[15px] leading-[100%] font-normal text-white sm:text-[16px] md:text-[17px] lg:text-[18px]">
                        Disclosures
                      </div>
                    </div>
                    <div className="h-[22px] w-[5px] text-white sm:h-[24px] md:h-[26px] lg:h-[28px]">
                      ›
                    </div>
                  </div>

                  <div className="flex h-7 w-full max-w-[129.5px] items-center justify-between">
                    <div className="min-h-[18px] w-auto max-w-[87px] sm:min-h-[19px] md:min-h-[20px] lg:min-h-[21px]">
                      <p className="font-['Abhaya_Libre'] text-[15px] leading-[100%] font-normal tracking-[0] text-white sm:text-[16px] md:text-[17px] lg:text-[18px]">
                        SEBI Scores
                      </p>
                    </div>

                    <div className="max-w-[4px] sm:h-[25px] md:h-[26px] lg:h-[28px]">
                      <div className="align-middle font-['Abhaya_Libre'] text-[14px] leading-[20px] font-normal tracking-normal text-[#FCF3E4] sm:text-[15px] sm:leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[28px]">
                        ›
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[250px] w-full max-w-[390.38px] gap-2 border-l border-l-[#FFFFFF1A] pb-4 pl-5 sm:h-[270px] sm:pl-6 md:h-[290px] md:pb-0 md:pl-7 lg:h-[315.3px] lg:pl-8">
              <div className="h-6 w-full max-w-[357.38px] sm:h-[25px] md:h-[26px] md:w-[330px] lg:h-7">
                <p className="h-6 w-full align-middle font-['Abhaya_Libre'] text-[14px] leading-[24px] font-normal tracking-normal text-[#FCF3E4] sm:h-[25px] sm:text-[15px] sm:leading-[25px] md:h-[26px] md:text-[16px] md:leading-[26px] lg:h-7 lg:text-[18px] lg:leading-7">
                  GET IN TOUCH
                </p>
              </div>
              <div className="h-[2px] w-full bg-[#FCF3E4] md:max-w-[28px] lg:max-w-[32px]"></div>

              <div className="flex min-h-[232px] w-full max-w-[357.38px] flex-col gap-4 pt-3 sm:gap-5 sm:pt-3 md:gap-6 md:pt-4 lg:gap-6 lg:pt-4">
                <div className="flex h-6 w-full gap-3 sm:h-[25px] sm:gap-4 md:h-[26px] md:gap-4 lg:h-7 lg:gap-4">
                  <div className="h-6 max-w-6 pt-1 sm:h-[26px] sm:pt-1 md:h-[27px] md:pt-1 lg:h-7 lg:pt-1">
                    <div className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-[23px] md:w-[23px] lg:h-6 lg:w-6">
                      <Image
                        src="/assests/footeremail.svg"
                        alt="Logo"
                        width={180}
                        height={50}
                        priority
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="h-6 w-full max-w-[192px] align-middle font-['Abhaya_Libre'] text-[14px] leading-[24px] font-normal tracking-normal text-white sm:h-[25px] sm:text-[15px] sm:leading-[25px] md:h-[26px] md:leading-[26px] lg:h-7 lg:text-[18px] lg:leading-7">
                    reachus@anandrathi.com
                  </div>
                </div>

                <div className="flex h-[90px] w-full gap-3 sm:h-[96px] sm:gap-4 md:h-[104px] md:w-[330px] md:gap-4 lg:h-[112px] lg:w-[357.38px] lg:gap-4">
                  <div className="h-6 w-5 pt-1 sm:h-[26px] sm:w-[22px] sm:pt-1 md:h-[27px] md:w-[23px] md:pt-1 lg:h-7 lg:w-6 lg:pt-1">
                    <div className="h-[24px] w-[24px]">
                      <Image
                        src="/assests/localtionfooter.svg"
                        alt="Logo"
                        width={180}
                        height={50}
                        priority
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="h-[90px] w-full max-w-[329px] opacity-90 sm:h-[96px] md:h-[104px] lg:h-[112px]">
                    <div className="h-[90px] w-full align-middle font-['Abhaya_Libre'] text-[14px] leading-[22px] font-normal tracking-normal text-white sm:h-[96px] sm:text-[15px] sm:leading-[24px] md:h-[104px] md:w-[300px] md:text-[16px] md:leading-[26px] lg:h-[112px] lg:w-[329px] lg:text-[18px] lg:leading-7">
                      Registered Office: Express Zone A Wing, 10th Floor, Western Express Highway,
                      Goregaon East, Mumbai 400063.
                    </div>
                  </div>
                </div>


                <div className="flex h-6 w-full items-center gap-3 gap-4 sm:h-[25px] sm:gap-4 md:h-[26px] md:w-[330px] lg:h-7 lg:w-[357.38px]">



                  <div className="flex h-6 w-6 items-center justify-center ps-0 lg:ps-2">
                    <Image
    src="/assests/phone footer.svg"
    alt="Phone"
    width={24}
    height={24}
    className="object-contain"
    style={{ width: "24px", height: "auto" }}
  />
</div>


                  <div className="h-6 w-[194px] sm:h-[25px] sm:w-[180px] md:h-[26px] md:w-[188px] lg:h-7 lg:w-[194px]">
                    <p className="font-['Abhaya_Libre'] text-[14px] leading-[24px] font-normal text-white sm:text-[15px] sm:leading-[25px] md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-7">
                      Contact No: 022-62817000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end here   */}


          <div className="w-full max-w-[1240px] border-t border-t-[#FFFFFF33] pt-8 pb-12 sm:pt-9 sm:pb-14 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20">
            {/* Heading */}
            <div className="w-full">
              <p className="font-['Abhaya_Libre'] text-[15px] leading-6 font-bold text-[#FCF3E4] sm:text-[16px] sm:leading-[25px] md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[26px]">
                DISCLAIMER
              </p>
            </div>

            <div className="mt-2 h-[2px] w-6 bg-[#FCF3E4] sm:w-[26px] md:w-7 lg:w-8" />


            {showdisclamair ? (
              <>
                <div className="mt-4 w-full opacity-90">
                  <p className="w-full font-['Abhaya_Libre'] text-[16px] leading-[22px] font-normal text-white sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] lg:text-[21px] lg:leading-[27px] xl:text-[24px] xl:leading-[29.25px]">
                    The information contained in this document has been prepared on the basis of
                    internal data, publicly available information, market sources, and other
                    information believed to be reliable. However, no representation or warranty,
                    express or implied, is made as to the accuracy, completeness, or fairness of the
                    information contained herein. The information provided is for general
                    informational purposes only and does not constitute investment, legal, tax,
                    accounting, or other professional advice.
                  </p>
                </div>

                <div className="mt-4 w-full opacity-70">
                  <div className="w-full font-['Abhaya_Libre'] text-[16px] leading-[22px] font-normal text-white sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] lg:text-[21px] lg:leading-[27px] xl:text-[24px] xl:leading-[29.25px]">
                    <p className="mb-4">
                      This document is intended solely for discussion and information purposes and
                      should not be construed as an offer, invitation, solicitation, recommendation,
                      or inducement to invest in any security, product, scheme, or Alternative
                      Investment Fund ("AIF").
                    </p>

                    <p className="mb-4">
                      The contents of this document do not constitute a complete description of the
                      investment strategy, investment process, terms, conditions, risks, or other
                      characteristics of any proposed investment vehicle. Prospective investors
                      should independently evaluate the merits and risks of any investment and seek
                      appropriate professional advice before making any investment decision. The
                      investment strategy may invest in equity and equity-related securities and may
                      maintain concentrated positions in selected investment opportunities based on
                      the Investment Manager's assessment of valuation, growth prospects, business
                      quality, and other investment parameters. Such investments are subject to
                      market risk, liquidity risk, business risk, sector risk, concentration risk,
                      valuation risk, management risk, regulatory risk, and other risks associated
                      with investments in securities markets. The value of investments and the
                      income derived therefrom may fluctuate, and investors may not recover the full
                      amount originally invested. Past performance, whether actual or simulated, is
                      not indicative of future results and should not be relied upon as a basis for
                      investment decisions. There can be no assurance or guarantee that the
                      investment objectives of the Fund or any investment strategy will be achieved.
                      Certain statements contained herein may constitute forward-looking statements,
                      including but not limited to projections, forecasts, estimates, targets,
                      expectations, and anticipated market developments. Such statements are based
                      on current assumptions, expectations, estimates, and projections, which are
                      inherently subject to significant business, economic, regulatory, market, and
                      competitive uncertainties and contingencies. Actual results may differ
                      materially from those expressed or implied in such forward-looking statements.
                      No assurance is given that any forecast, projection, target return, or
                      investment objective will be achieved. The performance of portfolio
                      investments may be affected by various factors including, but not limited to,
                      changes in economic conditions, interest rates, inflation, government
                      policies, taxation laws, accounting standards, political developments,
                      geopolitical events, market sentiment, industry dynamics, technological
                      disruption, corporate governance issues, management decisions, and other
                      domestic and international developments. Investments in mid-cap, small-cap,
                      emerging, or less liquid securities may involve higher volatility and
                      liquidity risks than The Investment Manager may utilize proprietary research
                      methodologies, valuation frameworks, quantitative models, and investment
                      processes in making investment decisions. There can be no assurance that such
                      methodologies, assumptions, models, or analyses will accurately predict future
                      market movements, company performance, or investment outcomes. The Fund, its
                      portfolio companies, and investors may be adversely affected by changes in
                      applicable laws, regulations, taxation policies, regulatory interpretations,
                      accounting standards, or governmental actions. Regulatory and tax treatment
                      may change during the tenure of the Fund and may have a material impact on
                      returns. Investments are also subject to operational risks, including but not
                      limited to technology failures, cyber security incidents, settlement failures,
                      counterparty defaults, service provider failures, data inaccuracies, fraud,
                      force majeure events, pandemics, natural disasters, acts of terrorism, war,
                      civil disturbances, or other unforeseen events beyond the control of the Fund
                      or the Investment Manager.
                    </p>

                    <button
                      type="button"
                      onClick={() => setshowdisclamair(!showdisclamair)}
                      className="flex h-[42px] w-[180px] items-center justify-center gap-2 rounded-sm border border-[#FCF3E4] px-5 sm:w-[190px] md:w-[200px] lg:w-[212px]"
                    >
                      <span className="font-['Abhaya_Libre'] text-[14px] leading-6 font-semibold text-[#FCF3E4] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                        Read Full Disclaimer
                      </span>

                      <span className="flex h-4 w-4 shrink-0 items-center justify-center text-white">
                        <IoIosArrowDown className="h-4 w-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-4 w-full opacity-90">
                  <p className="w-full font-['Abhaya_Libre'] text-[16px] leading-[22px] font-normal text-white sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] lg:text-[21px] lg:leading-[27px] xl:text-[24px] xl:leading-[29.25px]">
                    The information contained in this document has been prepared on the basis of
                    internal data, publicly available information, market sources, and other
                    information believed to be reliable. However, no representation or warranty,
                    express or implied, is made as to the accuracy, completeness, or fairness of the
                    information contained herein. The information provided is for general
                    informational purposes only and does not constitute investment, legal, tax,
                    accounting, or other professional advice.
                  </p>
                </div>


                <button
                  type="button"
                  onClick={() => setshowdisclamair(!showdisclamair)}
                  className="flex h-[42px] w-[180px] items-center justify-center gap-2 rounded-sm border border-[#FCF3E4] px-5 sm:w-[190px] md:w-[200px] lg:w-[212px]"
                >
                  <span className="font-['Abhaya_Libre'] text-[14px] leading-6 font-semibold text-[#FCF3E4] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                    Close
                  </span>

                  <span className="flex h-4 w-4 shrink-0 items-center justify-center text-white">
                    <IoIosArrowUp className="h-4 w-4" />
                  </span>
                </button>
              </>
            )}
          </div>



          <div className="mx-auto flex w-full max-w-[1240px] flex-col border-t border-white/20 pt-5 sm:pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
            <div className="w-full shrink-0 lg:w-[350px]">
              <p className="font-[Abhaya_Libre] text-[16px] leading-5 font-normal text-white">
                © 2026 Anand Rathi Asset Management.
                <br />
                All Rights Reserved.
              </p>
            </div>


            <div className="mt-4 flex min-w-0 flex-1 flex-wrap items-center justify-start gap-x-4 gap-y-2 lg:mt-0 lg:justify-end lg:gap-x-5">
              <p className="font-[Abhaya_Libre] text-[16px] leading-5 font-semibold whitespace-nowrap text-white">
                Privacy Policy
              </p>

              <span className="font-[Abhaya_Libre] text-[16px] leading-5 text-white">|</span>

              <p className="font-[Abhaya_Libre] text-[16px] leading-5 font-semibold whitespace-nowrap text-white">
                Terms of Use
              </p>

              <span className="font-[Abhaya_Libre] text-[16px] leading-5 text-white">|</span>

              <p className="font-[Abhaya_Libre] text-[16px] leading-5 font-semibold whitespace-nowrap text-white">
                Cookie Policy
              </p>

              <span className="font-[Abhaya_Libre] text-[16px] leading-5 text-white">|</span>

              <p className="font-[Abhaya_Libre] text-[16px] leading-5 font-semibold whitespace-nowrap text-white">
                SEBI Registered
              </p>

              <span className="font-[Abhaya_Libre] text-[16px] leading-5 text-white">|</span>

              <p className="font-[Abhaya_Libre] text-[16px] leading-5 font-semibold whitespace-nowrap text-white">
                AIF Registration No. XXXXX
              </p>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
