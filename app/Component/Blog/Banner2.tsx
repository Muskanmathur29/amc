import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

let cartdata = [
  {
    Image: "/assests/Blog/NavigatingVolatility.svg",
    eyebrow: "MARKET OUTLOOK",
    date: "May 20, 2025",
    content1: "Navigating Volatility: Staying Invested for the Long Term",
    content2:
      "Market volatility can test even the most patient investors. Here's why staying invested through cycles matters.",
  },

  {
    Image: "/assests/Blog/GrowthEngine.svg",
    eyebrow: "ECONOMY",
    date: "May 12, 2025",
    content1: "India's Growth Engine: Drivers of aTransforming Economy",
    content2:
      "From demographics to digitization, explore the key structural drivers powering India's economic trajectory.",
  },
  {
    Image: "/assests/Blog/QualityCompounding.svg",
    eyebrow: "INVESTMENT STRATEGY",
    date: "May 02, 2025",
    content1: "Quality Compounding: The Anand Rathi Way",
    content2:
      "How our quality-first approach aims to identify businesses built to compound sustainability over decades.",
  },
  {
    Image: "/assests/Blog/ESG.svg",
    eyebrow: "ESG INVESTING",
    date: "May 08, 2025",
    content1: "ESG: Beyond a Trend, Building a Sustainable Future",
    content2:
      "Why Environmental, Social and Governance factors are central to long-term value creation.",
  },

  {
    Image: "/assests/Blog/EarningsSeason.svg",
    eyebrow: "MARKET INSIGHTS",
    date: "May 02, 2025",
    content1: "Earnings Season Takeaways: What Q4 FY25 Tells Us",
    content2:
      "Key highlights from the latest earnings season and what they indicate for the road ahead.",
  },
  {
    Image: "/assests/Blog/AssetAllocation.svg",
    eyebrow: "ASSET ALLOCATION",
    date: "Apr 28, 2025",
    content1: "Asset Allocation in Uncertain Times",
    content2:
      "A disciplined approach to asset allocation can help investors manage risk and capture opportunities.",
  },
];

let Featuredata = [
  {
    image: "/assests/Blog/Featured1.svg",
    content1: "The Case for India in a Shifting Global Order",
    data: "May 18, 2025",
  },
  {
    image: "/assests/Blog/Featured2.svg",
    content1: "Small & Midcaps: The Next Leg of India's Growth Story",
    data: "May 11, 2025",
  },

  {
    image: "/assests/Blog/Featured3.svg",
    content1: "Decoding Markets: Volatility, Valuations & the Road Ahead",
    data: "Apr 30, 2025",
  },
];

export default function Banner2() {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center bg-[linear-gradient(180deg,#FFFFFF_0%,#F9E1BD_100%)] py-10">
        <div className="mx-auto my-[50px] flex h-auto w-full max-w-[1216px] flex-col items-center justify-center gap-8 sm:gap-9 md:flex-row md:items-start md:gap-10 lg:gap-12">
          <div className="flex h-[1514px] h-auto w-full max-w-[778.67px] flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10">
            <div className="flex min-h-[40px] w-full flex-col items-center sm:min-h-[42px] sm:justify-center md:min-h-[44px] lg:min-h-[46px] lg:flex-row lg:justify-between">
              <div className="min-h-[40px] w-full max-w-[180px] border-b-2 border-[#020101] pb-2 sm:min-h-[42px] md:min-h-[44px] lg:min-h-[46px]">
                <div className="min-h-[28px] w-full max-w-[180px] font-['Abhaya_Libre'] text-[22px] leading-[28px] font-semibold tracking-[0px] text-[#2E2E2C] sm:min-h-[30px] sm:text-[24px] sm:leading-[30px] md:min-h-[32px] md:text-[27px] md:leading-[32px] lg:min-h-[36px] lg:text-[30px] lg:leading-[36px]">
                  Latest Insights
                </div>
              </div>

              <div className="flex min-h-[30px] w-full max-w-[268.73px] gap-2 pt-2 sm:min-h-[32px] sm:gap-2.5 md:min-h-[35px] md:gap-3 lg:min-h-[38px] lg:gap-3 lg:pt-0">
                <div className="min-h-[30px] w-full max-w-[122.92px] sm:min-h-[32px] md:min-h-[35px] lg:min-h-[38px]">
                  <button className="min-h-[32px] w-full max-w-[122.92px] rounded-[4px] border border-[#E8E8E8] bg-white px-3 py-1.5 sm:min-h-[34px] sm:px-3.5 md:min-h-[36px] md:px-4 lg:min-h-[38px] lg:py-2 lg:pr-10 lg:pl-4">
                    <div className="flex min-h-[16px] w-full max-w-[64.92px] pr-[0.92px] sm:min-h-[17px] md:min-h-[18px] lg:min-h-[20px]">
                      <p className="relative min-h-[16px] w-full max-w-[64px] font-['Inter'] text-[12px] leading-[16px] font-normal tracking-[0px] text-[#2E2E2C] sm:min-h-[17px] sm:text-[13px] sm:leading-[17px] md:min-h-[18px] md:text-[13px] md:leading-[18px] lg:min-h-[20px] lg:text-[14px] lg:leading-[20px]">
                        All Topics
                        <span className="absolute h-4 w-4 pl-1 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-4 lg:w-4">
                          {" "}
                          ↓
                        </span>
                      </p>
                    </div>
                  </button>
                </div>

                <div className="min-h-[30px] w-full max-w-[133.92px] sm:min-h-[32px] md:min-h-[35px] lg:min-h-[38px]">
                  <button className="min-h-[32px] w-full max-w-[133.92px] rounded-[4px] border border-[#E8E8E8] bg-white px-3 py-1.5 sm:min-h-[34px] sm:px-3.5 md:min-h-[36px] md:px-4 lg:min-h-[38px] lg:py-2 lg:pr-10 lg:pl-4">
                    <div className="flex min-h-[16px] w-full pr-[0.92px] sm:min-h-[17px] md:min-h-[18px] lg:min-h-[20px]">
                      <p className="relative min-h-[16px] w-full font-['Inter'] text-[12px] leading-[16px] font-normal tracking-[0px] text-[#2E2E2C] sm:min-h-[17px] sm:text-[13px] sm:leading-[17px] md:min-h-[18px] md:text-[13px] md:leading-[18px] lg:min-h-[20px] lg:text-[14px] lg:leading-[20px]">
                        Latest First
                        <span className="absolute h-4 w-4 pl-1 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-4 lg:w-4">
                          {" "}
                          ↓
                        </span>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-auto grid w-full max-w-[778.67px] grid-cols-1 items-center justify-items-center gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
              {cartdata.map((element, index) => (
                <Link href="/Blog/1">
                  <div className="min-h-[360px] w-full max-w-[373.33px] rounded-lg border-2 border-[#B07636] bg-white shadow-[0px_1px_2px_0px_#0000000D] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[425.5px]">
                    <div className="min-h-[140px] w-full max-w-[373.33px] sm:min-h-[155px] md:min-h-[175px] lg:min-h-[192px]">
                      <Image
                        width={502}
                        height={405}
                        src={element.Image}
                        alt="icon"
                        className=" "
                      />
                    </div>
                    <div className="min-h-[180px] w-full max-w-[373.33px] gap-2 p-4 sm:min-h-[195px] sm:gap-2.5 sm:p-5 md:min-h-[215px] md:gap-3 md:p-6 lg:min-h-[233.5px] lg:gap-3 lg:p-6">
                      <div className="mx-auto flex min-h-[12px] w-full max-w-[325.33px] items-center justify-between pr-[0.01px] sm:min-h-[13px] md:min-h-[14px] lg:min-h-[15px]">
                        <div className="font-abhaya min-h-[12px] w-full min-w-[102px] text-[#B07636] sm:min-h-[13px] md:min-h-[14px] lg:min-h-[15px]">
                          {element.eyebrow}
                        </div>

                        <span className="block min-h-[12px] w-full max-w-[65px] sm:min-h-[13px] md:min-h-[14px] lg:min-h-[15px]">
                          <span className="block min-h-[12px] w-full max-w-[65px] font-['Inter'] text-[8px] leading-[12px] font-normal tracking-[0px] text-[#2E2E2C] sm:min-h-[13px] sm:text-[9px] sm:leading-[13px] md:min-h-[14px] md:text-[9px] md:leading-[14px] lg:min-h-[15px] lg:text-[10px] lg:leading-[15px]">
                            {element.date}
                          </span>
                        </span>
                      </div>

                      <div className="min-h-[40px] w-full max-w-[300.33px] sm:min-h-[44px] md:min-h-[48px] lg:min-h-[55px]">
                        <p className="min-h-[40px] w-full max-w-[300.33px] font-['Abhaya_Libre'] text-[16px] leading-[22px] font-semibold tracking-[0px] text-[#2E2E2C] sm:min-h-[44px] sm:text-[17px] sm:leading-[23px] md:min-h-[48px] md:text-[18px] md:leading-[25px] lg:min-h-[55px] lg:text-[20px] lg:leading-[27.5px]">
                          {element.content1}
                        </p>
                      </div>

                      <div className="min-h-[44px] w-full max-w-[325.33px] sm:min-h-[48px] md:min-h-[54px] lg:min-h-[60px]">
                        <p className="min-h-[44px] w-full max-w-[325.33px] font-['Abhaya_Libre'] text-[12px] leading-[17px] font-bold tracking-[0px] text-[#46483D] sm:min-h-[48px] sm:text-[12px] sm:leading-[18px] md:min-h-[54px] md:text-[13px] md:leading-[19px] lg:min-h-[60px] lg:text-[14px] lg:leading-[20px]">
                          {element.content2}
                        </p>
                      </div>

                      <div className="flex min-h-[16px] w-full max-w-[325.33px] gap-2 pt-[3.5px] sm:min-h-[17px] md:min-h-[18px] lg:min-h-[19.5px]">
                        <span className="font-abhaya block min-h-[13px] w-full min-w-[63px] text-[#B07636] sm:min-h-[14px] md:min-h-[15px] lg:min-h-[16px]">
                          Read More
                        </span>
                        <span className="h-[14px] w-[14px]">
                          <span className="absolute top-[3.65px] left-[2.48px] h-[6.71px] w-[9.04px] rotate-180 text-[#B07636]">
                            <span className="text-[20px]">→</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="h-[40px] w-full max-w-[779px] sm:h-[42px] md:h-[46px]">
              <div className="mx-auto flex h-[46px] w-full max-w-[203px] items-center justify-center gap-2 rounded-[4px] border border-[#E8E8E8] bg-[#B07636] px-8 py-3">
                <p className="text-center font-['Inter'] text-[14px] leading-[20px] font-semibold text-white">
                  Load More Blogs
                </p>
                {/* <div className="w-[7px] shrink-0 text-center text-[#FFFFFF] sm:h-[10px] sm:w-[7.5px] md:w-[7.67px]">
                  <span>↓</span>
                </div> */}
                <div className="flex h-[20px] w-[12px] shrink-0 items-center justify-center text-[16px] leading-[20px] text-white">
                  <span>↓</span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="flex w-full max-w-[389px] flex-col gap-10 px-4 sm:px-5 md:px-6 lg:px-0">
            <div className="h-[46px] w-full max-w-[389px]">
              <div className="flex h-[42px] w-full max-w-[389px] rounded-full border border-[#E8E8E8] bg-white py-[11px] pr-[40px] pl-[16px] sm:h-[44px] sm:py-[12px] sm:pr-[44px] sm:pl-[18px] md:h-[46px] md:py-[13px] md:pr-[48px] md:pl-[20px]">
                <div className="h-[17px] w-full max-w-[319px]">
                  <input
                    type="text"
                    className="w-full max-w-[319px] font-['Inter'] text-[12px] leading-[100%] font-bold font-normal text-[#686F7C] italic sm:text-[13px] md:text-[14px]"
                    placeholder="Search blogs..."
                  ></input>
                </div>

                <div className="h-4 w-4 sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px]">
                  <button className="h-[10px] w-[10px] sm:h-[11px] sm:w-[11px] md:h-[11.625px] md:w-[11.625px]">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex min-h-[290px] w-full max-w-[389px] flex-col gap-[24px] rounded-[8px] border-2 border-transparent bg-white p-8 shadow-[0px_1px_2px_0px_#0000000D]">
              <div className="h-[38px] w-full max-w-[146px] border-b-2 border-[#B07636] pb-2">
                <p className="w-full max-w-[146px] font-['Inter'] text-[20px] leading-[28px] font-bold tracking-normal text-[#2E2E2C]">
                  Popular Topics
                </p>
              </div>

              <div className="min-h-[164px] w-full max-w-[325px] gap-4">
                {["Mutual Fund", "AIF", "Taxation", "Pms"].map((element, index) => (
                  <>
                    <div className="flex min-h-[29px] w-full max-w-[325px] cursor-pointer items-center justify-between border-b border-white pb-2">
                      <div className="h-[20px] w-full max-w-[97px]">
                        <p className="font-['Abhaya_Libre'] text-[16px] leading-[20px] font-bold text-[#46483D] sm:text-[17px] md:text-[18px]">
                          {element}
                        </p>
                      </div>
                      <div className="w-3 sm:w-[13px] md:w-[14px]">
                        <p className="w-[8px] shrink-0 text-[30px] text-[#B07636] sm:w-[9px] md:w-[9.04px]">
                          →
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="flex min-h-[366px] w-full max-w-[389px] flex-col gap-[24px] rounded-[8px] border-2 border-transparent bg-white p-8 shadow-[0px_1px_2px_0px_#0000000D]">
              <div className="h-[38px] w-full max-w-[146px] border-b-2 border-[#B07636] pb-2">
                <p className="w-full font-['Inter'] text-[20px] leading-[28px] font-bold tracking-normal text-[#2E2E2C]">
                  Featured Reads
                </p>
              </div>

              <div className="flex min-h-[240px] w-full max-w-[325px] flex-col gap-6">
                {Featuredata.map((element, index) => (
                  <div className="flex h-auto w-full max-w-[325px] flex-col gap-4 lg:h-[64px] lg:flex-row">
                    <div className="h-[56px] w-[56px] max-w-[325px] shrink-0 rounded-[4px] sm:h-[60px] sm:w-[60px] md:h-[64px] md:w-[64px]">
                      <Image src={element.image} alt="Logo" width={200} height={100} />
                    </div>

                    <div className="flex h-auto w-full max-w-[221px] flex-col gap-1 lg:h-[49px]">
                      <div className="h-full w-full max-w-[221px] sm:h-[26px] md:h-[30px] lg:h-[24px]">
                        <p className="h-full w-full max-w-[221px] font-['Abhaya_Libre'] text-[12px] leading-[15px] font-bold text-[#2E2E2C] sm:text-[13px] md:text-[14px] lg:h-[30px]">
                          {element.content1}
                        </p>
                      </div>
                      <div className="h-full w-full max-w-[221px] lg:h-[15px]">
                        <p className="h-full w-full max-w-[64px] font-['Inter'] text-[9px] leading-[15px] font-normal text-[#2E2E2C] sm:text-[10px] lg:h-[15px]">
                          {element.data}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[164px] w-full max-w-[1216px] flex-col items-center justify-center gap-[15px] rounded-[12px] border border-[#B07636] bg-gradient-to-b from-[#576534] to-[#41472D] p-8 md:flex-row md:p-12 lg:justify-between">
          <div className="flex min-h-[66px] w-full max-w-[639px] flex-col gap-6 sm:flex-row">
            <div className="mx-auto flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#B07636] p-3 sm:h-[60px] sm:w-[60px] sm:p-[14px] md:h-[66px] md:w-[66px] md:p-4">
              <div className="mx-auto flex h-[32px] w-[32px] items-center justify-center">
                <div className="h-[18px] w-[18px] shrink-0 text-[#B07636] sm:h-[20px] sm:w-[20px] md:h-[20.67px] md:w-[20.67px]">
                  <Image
                    width={502}
                    height={405}
                    src="/assests/Blog/Vector(4).svg"
                    alt="icon"
                    className=" "
                  />
                </div>
              </div>
            </div>
            <div className="flex h-auto w-full max-w-[549px] flex-col gap-2 gap-[10px] md:h-[56px] lg:h-[60px]">
              <div className="mx-auto h-[24px] w-full max-w-[549px] sm:h-[28px] md:h-[32px]">
                <p className="w-full text-center font-['Abhaya_Libre'] text-[18px] leading-[26px] font-semibold text-white sm:text-[20px] sm:leading-[28px] md:text-[22px] md:leading-[30px] lg:max-w-[297px] md:text-start lg:text-[24px] lg:leading-[32px]">
                  Research. Perspective. Clarity.
                </p>
              </div>

              <p className="w-full max-w-[549px] text-center font-['Inter'] text-[14px] leading-[20px] font-normal tracking-[0] text-[#E8E8E8] md:text-start">
                Read expert insights from our investment team and stay informed on what matters.
              </p>
            </div>
          </div>

          <div className="flex min-h-[44px] w-full max-w-[272px] items-center justify-center gap-2 rounded-[4px] bg-[#B07636] px-8 py-3 sm:max-w-[272px] md:max-w-[272px] lg:max-w-[272px] xl:max-w-[272px]">
            <p className="w-full max-w-[184px] text-center font-['Inter'] text-[14px] leading-[20px] font-semibold tracking-[0px] text-[#FFFFFF]">
              Explore Investor Education
            </p>
            {/* <svg
              className="h-[7.67px] w-[10.33px] rotate-180 text-white"
              viewBox="0 0 11 8"
              fill="none"
            >
              →
            </svg> */}
            <div className="w-[16px]">
              <span className="inline-block w-[10.33px] text-[30px] text-white"> →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
