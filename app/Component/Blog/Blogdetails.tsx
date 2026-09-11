import Breadcrumb from "../common/Breadcrumb";
import { TiTick } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import BlogSection from "./Blogsection";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Blogdetails() {
  let icons = [
    "/assests/Blog/LinkedIn.svg",
    "/assests/Blog/X.svg",
    "/assests/Blog/Envelope.svg",
    "/assests/Blog/Link.svg",
  ];

  const assetClasses = [
    {
      title: "Equity",
      description: "High growth potential over the long term.",
    },
    {
      title: "Debt",
      description: "Provides stability and regular income.",
    },
    {
      title: "Cash & Cash Equivalents",
      description: "Offers liquidity and reduces overall portfolio volatility.",
    },
    {
      title: "Gold & Commodities",
      description: "Acts as a hedge against inflation and currency risk.",
    },
    {
      title: "International Assets",
      description: "Adds geographic diversification and access to global opportunities.",
    },
  ];

  const sectors = [
    "Financials",
    "Technology",
    "Healthcare",
    "Consumer Goods",
    "Energy",
    "Industrials",
  ];

  const allocationData = [
    {
      risk: "Conservative",
      equity: "20–30%",
      debt: "50–60%",
      gold: "10–15%",
      cash: "5–10%",
    },
    {
      risk: "Moderate",
      equity: "40–60%",
      debt: "30–40%",
      gold: "10–15%",
      cash: "5–10%",
    },
    {
      risk: "Aggressive",
      equity: "70–80%",
      debt: "10–20%",
      gold: "5–10%",
      cash: "5% or less",
    },
  ];

  let lowercart = [
    {
      Image: "/assests/Blog/GrowthEngine.svg",
      eyebrow: "Market Outlook",
      title: "Mid-Year Market Outlook 2024",
      content: "Key trends and factors that could shape the markets in the second half of 2024.",
      date: "May 15, 2024   •   5 min read",
    },
    {
      Image: "/assests/Blog/QualityCompounding.svg",
      eyebrow: "Investing Basics",
      title: "SIP vs Lump Sum: Which is Better?",
      content: "A comprehensive comparison to help you choose your investment approach.",
      date: "May 02, 2024   •   4 min read",
    },

    {
      Image: "/assests/Blog/AssetAllocation.svg",
      eyebrow: "Wealth Building",
      title: "The Power of Compounding in Long-Term Investing",
      content: "See how compounding can help you create substantial wealth over time.",
      date: "Apr 18, 2024   •   6 min read",
    },
  ];
  let List1 = [
    "1. Why Diversification Matters",
    "2. Understand Asset Classes",
    "3. Diversification Across Sectors",
    "4. Choose the Right Mix",
    "5. Review and Rebalance Regularly",
  ];

  let mailform = {
    message: "Subscribe to our newsletter for the latest insights and updates.",
    email: "Enter your email",
    button: "Subscribe Now",
    message2: "We respect your privacy.",
  };

  let Populartopics = [
    "Equity Investing",
    "Market Outlook",
    "Portfolio Strategy",
    "Mutual Funds",
    "Wealth Planning",
    "Retirement Planning",
  ];

  let Speaktospeacility = {
    text1: "Speak to a Specialist",
    text2: "Our experts are here to help you make informed investment decisions.",
    text3: "+91 22 6281 7000",
  };
  return (
    <div>
      {/* <Breadcrumb /> */}

      <div className="mx-auto min-h-[50px] w-full px-4 py-4 sm:min-h-[54px] sm:px-5 sm:py-[18px] md:min-h-[58px] md:px-6 md:py-5 lg:min-h-[62px] lg:px-8 lg:py-[22px] xl:px-12">
        <div className="flex min-h-[16px] w-full max-w-[1240px] gap-2 sm:min-h-[17px] md:min-h-[18px] md:gap-[9px] lg:h-[18px]">
          <Breadcrumb />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] pb-10 sm:pb-12 md:pb-16 lg:pb-[80px]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start justify-center gap-10 sm:gap-12 md:gap-16 lg:flex-row lg:gap-[80px]">
          <div className="mx-auto w-full px-4 sm:px-5 md:px-6 lg:max-w-[820px] lg:px-0">
            <p className="w-max text-center font-['Inter'] text-[10px] leading-[16px] font-semibold tracking-[1.5px] whitespace-nowrap text-[#B07636] uppercase sm:text-[11px] sm:leading-[17px] sm:tracking-[1.7px] md:text-[12px] md:leading-[18px] md:tracking-[1.9px] lg:text-start">
              Portfolio Strategy
            </p>
            <div className="w-full pt-3 text-center lg:max-w-[820px] lg:text-start">
              <p className="h-auto w-full font-['Abhaya_Libre'] text-[28px] leading-[34px] font-semibold tracking-[0%] sm:text-[32px] sm:leading-[38px] md:text-[36px] md:leading-[43px] lg:max-w-[740px] lg:text-[40px] lg:leading-[48px] xl:text-[44px] xl:leading-[52px]">
                How to Build a Diversified Portfolio That Withstands Market Volatility
              </p>
            </div>

            <div className="w-full pt-4 text-center lg:max-w-[820px] lg:text-start">
              <p className="w-full font-['Abhaya_Libre'] text-[14px] leading-[22px] font-normal tracking-[0%] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px] lg:max-w-[640px] lg:text-[17px] lg:leading-[28px]">
                A diversified portfolio helps you manage risk and stay invested through every market
                cycle. Here's how to build one that's resilient and future-ready.
              </p>
            </div>

            {/* <div className="flex w-full max-w-[820px] flex-col items-center justify-center pt-4 sm:pt-5 md:pt-[22px] lg:flex-row lg:justify-between lg:pt-[26px]">
              <div className="flex w-full items-center justify-center gap-[12px] text-center lg:max-w-[275px] lg:text-start">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E9E9DC] text-center sm:h-10 sm:w-10 md:h-[42px] md:w-[42px] lg:h-[44px] lg:w-[44px] lg:text-start">
                  <FaUser />
                </div>

                <div className="lg:max-[219px] w-full gap-[3px]"></div>
              </div>
              <div></div>
            </div> */}

            <div className="flex w-full flex-col items-center justify-center pt-4 sm:pt-5 md:pt-[22px] lg:max-w-[820px] lg:flex-row lg:justify-between lg:pt-[26px]">
              <div className="flex w-full flex-col items-center justify-center gap-3 lg:max-w-[275px] lg:flex-row lg:justify-start">
                <div className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-full bg-[#E9E9DC] sm:h-10 md:h-[42px] md:w-[42px] lg:h-[44px] lg:w-[44px]">
                  <FaUser className="block text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]" />
                </div>

                <div className="flex w-full flex-col gap-[3px] lg:max-w-[219px]">
                  <div className="t flex items-center justify-center gap-[5px] sm:gap-[1px]">
                    <p className="font-['Abhaya_Libre'] text-[13px] leading-[18px] font-semibold tracking-[0%] text-[#2E2E2C] sm:text-[14px] sm:leading-[20px] md:text-[15px] md:leading-[21px] lg:max-w-[193px] lg:text-[15px] lg:leading-[21px]">
                      By Anand Rathi Research Team
                    </p>
                    <div className="h-[22px] w-[21px]">
                      <div className="h-4 w-4 shrink-0 rounded-full border border-[#B07636] text-[#B07636] sm:h-[18px] sm:w-[18px] md:h-[19px] md:w-[19px] lg:h-[19.7px] lg:w-[19.7px]">
                        <TiTick className="text-[#B07636]" />
                      </div>
                    </div>
                  </div>

                  <div className="my-1 text-center font-['Inter'] text-[10px] leading-[15px] font-normal tracking-[0%] text-[#9A8B70] sm:text-[11px] sm:leading-[16px] md:text-[12px] md:leading-[17px] lg:my-0 lg:text-[12px] lg:leading-[17px]">
                    May 22, 2024 • 6 min read
                  </div>
                </div>
              </div>

              <div className="flex min-h-[24px] w-full max-w-[189px] items-center gap-2 sm:min-h-[26px] md:min-h-[28px] lg:min-h-[30px]">
                <p className="w-full max-w-[37px] font-['Inter'] text-[10px] leading-[15px] font-normal tracking-[0%] text-[#9A8B70] sm:text-[11px] sm:leading-[16px] md:text-[12px] md:leading-[17px] lg:text-[12px] lg:leading-[17px]">
                  Share:
                </p>
                {icons.map((icon) => (
                  <div className="flex h-7 w-7 items-center justify-center rounded-sm border border-[#E3DCC8] bg-white sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-[30px] lg:w-[30px]">
                    <div className="h-[15px] w-[15px]">
                      <Image src={icon} width={100} height={100} alt="LinkedIn" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-auto w-full max-w-[820px] pt-4 sm:pt-5 md:pt-[22px] lg:h-[364px] lg:pt-6">
              <div className="h-auto w-full max-w-[820px] rounded-md sm:h-[260px] md:h-[300px] lg:h-[340px]">
                <Image
                  src="/assests/Blog/HeroImage.svg"
                  width={820}
                  height={100}
                  alt="herosection"
                />
              </div>
            </div>

            <div className="flex min-h-[1277px] w-full max-w-[820px] flex-col gap-[36px] pt-6 sm:gap-7 sm:pt-7 md:gap-8 md:pt-8 lg:gap-9 lg:pt-10 xl:min-h-[1277px] xl:max-w-[820px]">
              <BlogSection title="1. Why Diversification Matters">
                <p className="font-['Abhaya_Libre'] text-[12px] leading-[18px] text-[#46483D] sm:text-[13px] sm:leading-[20px] md:text-[14px] md:leading-[22px] lg:text-[15px] lg:leading-[24px]">
                  Diversification is the foundation of a strong investment strategy. It helps reduce
                  risk by spreading your investments across asset classes, sectors, and geographies
                  so that no single investment has an outsized impact on your portfolio.
                </p>
              </BlogSection>

              <BlogSection title="2. Understand Asset Classes">
                <p className="font-['Abhaya_Libre'] text-[12px] leading-[18px] text-[#46483D] sm:text-[13px] sm:leading-[20px] md:text-[14px] md:leading-[22px]">
                  Each asset class behaves differently across market cycles. A well-diversified
                  portfolio typically includes:
                </p>

                <div className="flex flex-col gap-[22px] pt-[22px]">
                  {assetClasses.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-['Abhaya_Libre'] text-[13px] leading-[18px] font-semibold text-[#2E2E2C] sm:text-[14px] sm:leading-[20px] md:text-[15px] md:leading-[21px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-['Abhaya_Libre'] text-[11px] leading-[17px] text-[#46483D] sm:text-[12px] sm:leading-[18px] md:text-[13px] md:leading-[20px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </BlogSection>

              <BlogSection title="3. Diversification Across Sectors">
                <p className="font-['Abhaya_Libre'] text-[12px] leading-[18px] text-[#46483D] sm:text-[13px] sm:leading-[20px] md:text-[14px] md:leading-[22px]">
                  Within equities, spread your investments across key sectors to reduce
                  concentration risk.
                </p>

                <div className="mt-5 grid w-full grid-cols-2 gap-y-5 rounded-md bg-[#FBF2E3] px-4 py-5 sm:grid-cols-3 sm:gap-y-4 md:grid-cols-6 md:gap-3 md:px-6">
                  {sectors.map((sector) => (
                    <div
                      key={sector}
                      className="text-center font-['Abhaya_Libre'] text-[10px] leading-[16px] text-[#46483D] sm:text-[11px] md:text-[12px]"
                    >
                      {sector}
                    </div>
                  ))}
                </div>
              </BlogSection>

              <BlogSection title="4. Choose the Right Mix">
                <p className="font-['Abhaya_Libre'] text-[12px] leading-[18px] text-[#46483D] sm:text-[13px] sm:leading-[20px] md:text-[14px] md:leading-[22px]">
                  Your asset allocation should depend on your financial goals, risk appetite, and
                  investment horizon.
                </p>

                <div className="mt-5 w-full overflow-x-auto rounded-md border border-[#E3DCC8]">
                  <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                      <tr className="bg-[#F4EBD8]">
                        <th className="border-r border-[#E3DCC8] px-3 py-2 text-left font-['Abhaya_Libre'] text-[11px] font-semibold text-[#2E2E2C]">
                          Risk Profile
                        </th>

                        <th className="border-r border-[#E3DCC8] px-3 py-2 text-left font-['Abhaya_Libre'] text-[11px] font-semibold text-[#2E2E2C]">
                          Equity
                        </th>

                        <th className="border-r border-[#E3DCC8] px-3 py-2 text-left font-['Abhaya_Libre'] text-[11px] font-semibold text-[#2E2E2C]">
                          Debt
                        </th>

                        <th className="border-r border-[#E3DCC8] px-3 py-2 text-left font-['Abhaya_Libre'] text-[11px] font-semibold text-[#2E2E2C]">
                          Gold & Others
                        </th>

                        <th className="px-3 py-2 text-left font-['Abhaya_Libre'] text-[11px] font-semibold text-[#2E2E2C]">
                          Cash
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {allocationData.map((row) => (
                        <tr key={row.risk}>
                          <td className="border-t border-[#E3DCC8] px-3 py-2 font-['Abhaya_Libre'] text-[11px] text-[#46483D]">
                            {row.risk}
                          </td>

                          <td className="border-t border-[#E3DCC8] px-3 py-2 font-['Abhaya_Libre'] text-[11px] text-[#46483D]">
                            {row.equity}
                          </td>

                          <td className="border-t border-[#E3DCC8] px-3 py-2 font-['Abhaya_Libre'] text-[11px] text-[#46483D]">
                            {row.debt}
                          </td>

                          <td className="border-t border-[#E3DCC8] px-3 py-2 font-['Abhaya_Libre'] text-[11px] text-[#46483D]">
                            {row.gold}
                          </td>

                          <td className="border-t border-[#E3DCC8] px-3 py-2 font-['Abhaya_Libre'] text-[11px] text-[#46483D]">
                            {row.cash}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </BlogSection>

              <BlogSection title="5. Review and Rebalance Regularly">
                <p className="font-['Abhaya_Libre'] text-[12px] leading-[18px] text-[#46483D] sm:text-[13px] sm:leading-[20px] md:text-[14px] md:leading-[22px]">
                  Markets change, and so should your portfolio. Rebalance at least once or twice a
                  year to realign your portfolio with your goals.
                </p>

                <div className="mt-6 w-full rounded-md bg-[#FBF2E3] p-4 sm:p-5 md:p-6">
                  <h3 className="font-['Abhaya_Libre'] text-[15px] leading-[21px] font-semibold text-[#2E2E2C] sm:text-[16px] sm:leading-[22px]">
                    The Bottom Line
                  </h3>

                  <p className="mt-2 font-['Abhaya_Libre'] text-[12px] leading-[18px] text-[#46483D] sm:text-[13px] sm:leading-[20px] md:text-[14px] md:leading-[22px]">
                    A well-diversified portfolio doesn't guarantee profits, but it can help you
                    manage risk and stay invested for the long term. Stay disciplined, review
                    regularly, and let your portfolio grow with you.
                  </p>
                </div>
              </BlogSection>
            </div>

            <div className="flex h-auto w-full max-w-[820px] flex-col gap-[36px] pt-6 sm:gap-7 sm:pt-7 md:gap-8 md:pt-8 lg:gap-9 lg:pt-12 xl:max-w-[820px]">
              <div className="lg-flex-row flex h-auto min-h-[28px] w-full max-w-[820px] flex-col items-center justify-between sm:min-h-[30px] md:min-h-[32px] lg:h-[32px] lg:flex-row">
                <p className="w-full max-w-[158px] font-['Abhaya_Libre'] text-[18px] leading-[25px] font-semibold text-[#1A1A10] sm:text-[20px] sm:leading-[27px] md:text-[22px] md:leading-[30px] lg:text-[24px] lg:leading-[32px]">
                  Related Articles
                </p>
                <div className="flex h-[19px] w-[122px] gap-[8px]">
                  <p className="w-full font-['Inter'] text-[12px] leading-[17px] font-medium tracking-normal text-[#B07636] sm:text-[12px] sm:leading-[18px] md:w-[98px] md:text-[13px] md:leading-[19px]">
                    View all articles
                  </p>
                  <svg
                    className="h-[14px] w-[16px] sm:h-[15px] sm:w-[17px] md:h-[16px] md:w-[18px]"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    {/* icon */}
                    <FaArrowRight className="text-[#B07636]" />
                  </svg>
                </div>
              </div>

              <div className="h-auto w-full pt-[18px] lg:pt-[24px]">
                <div className="flex h-auto flex-col items-center justify-center gap-[16px] lg:flex-row">
                  {lowercart.map((element, index) => (
                    <div className="min-h-[280px] w-full max-w-[256px] rounded-[12px] border border-[#E3DCC8] bg-white sm:min-h-[300px] md:min-h-[323px] lg:h-[323px] lg:w-[256px]">
                      <div className="h-[150px] max-w-[256px]">
                        <Image src={element.Image} width={256} height={150} alt="LinkedIn" />
                      </div>
                      <div className="w-full max-w-[256px] p-[16px] font-['Abhaya_Libre'] text-[18px] leading-[25px] font-semibold text-[#1A1A10] sm:text-[20px] sm:leading-[27px] md:text-[22px] md:leading-[30px] lg:text-[24px] lg:leading-[32px]">
                        <p className="w-full font-['Inter'] text-[9px] leading-[14px] font-semibold tracking-[1.2px] text-[#B07636] uppercase sm:text-[9px] sm:leading-[14px] sm:tracking-[1.3px] md:w-[224px] md:text-[10px] md:leading-[15px] md:tracking-[1.5px]">
                          {element.eyebrow}
                        </p>
                        <p className="w-full pt-[8px] font-['Abhaya_Libre'] text-[15px] leading-[21px] font-semibold tracking-normal text-[#1A1A10] sm:text-[15px] sm:leading-[21px] md:text-[16px] md:leading-[22px]">
                          {element.title}
                        </p>
                        <p className="pt-[6px] font-['Abhaya_Libre'] text-[13px] leading-[20px] font-normal tracking-normal text-[#46483D]">
                          {element.content}
                        </p>
                        <p className="pt-[12px] font-['Inter'] text-[11px] leading-[16px] font-normal tracking-normal text-[#9A8B70]">
                          {element.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 lg:max-w-[340px]">
            <div className="flex h-auto max-w-[340px] flex-col items-center justify-center gap-[24px]">
              <RightCart title="On This Page" List1={List1} />
              <RightCart
                icon={<IoMdMail className="h-[20px] w-[20px] text-[#B07636]" />}
                mailform={mailform}
              />
              <RightCart
                className="flex flex-col gap-[16px]"

                title="Popular Topics"
                Populartopics={Populartopics}
              />
              <RightCart Speaktospeacility={Speaktospeacility} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Arrow = {
  title: string;
};
function Arrow({ title }: Arrow) {
  return (
    <>
      <div className="flex h-auto w-full max-w-[114px] items-start gap-[8px] pt-[4px] sm:max-w-[114px] md:h-[23px] md:w-[114px] lg:h-[23px] lg:w-[114px]">
        <p className="h-auto w-full max-w-[90px] font-['Inter'] text-[11px] leading-[16px] font-medium tracking-normal text-[#B07636] sm:max-w-[90px] sm:text-[12px] sm:leading-[18px] md:h-[19px] md:w-[90px] md:text-[13px] md:leading-[19px] lg:h-[19px] lg:w-[90px] lg:text-[13px] lg:leading-[19px]">
          {title}
        </p>
        <div className="h-[16px] w-[16px]">
          <p className="relative -top-[0.85px] -left-[0.85px] h-[15.7px] w-[17.7px] text-[#B07636]">
            <FaLongArrowAltRight className="text-[#B07636]" />
          </p>
        </div>
      </div>
    </>
  );
}

type MailForm = {
  message: string;
  email: string;
  button: string;
  message2: string;
};

type RightCartProps = {
  icon?: React.ReactNode;
  title?: string;
  List1?: string[];
  mailform?: MailForm;
  Populartopics?: string[];
  className?: string;
  Speaktospeacility?: string[];
};

const RightCart = ({
  icon,
  title,
  List1,
  mailform,
  Populartopics,
  Speaktospeacility,
}: RightCartProps) => {
  return (
    <div
      className={`h-auto ${Populartopics ? "flex flex-col gap-[16px]" : ""} w-[340px] rounded-md border border-[#E3DCC8] p-[24px] text-[#FFFFFF]`}
    >
      {icon && <div className="flex h-[26px] w-[26px] items-center justify-center">{icon}</div>}

      {title && (
        <p className="font-['Inter'] text-[15px] leading-[21px] font-semibold tracking-normal text-[#1A1A10] sm:text-[16px] sm:leading-[22px] md:text-[17px] md:leading-[24px]">
          {title}
        </p>
      )}

      {/* {List1 &&
       <div className="h-auto w-full max-w-[292px] gap-[2px] pt-[16px] sm:max-w-[292px] md:h-[214px] lg:h-[214px] lg:w-[292px]">
        List1.map((element, index) => (

            {index == 0 ? (
              <div className="min-h-[34px] w-full max-w-[292px] border-l-[3px] border-l-[#B07636] bg-[#FCF3E4] px-[12px] py-[9px] sm:min-h-[36px] md:min-h-[38px] lg:h-[38px] lg:w-[292px]">
                <p className="w-full max-w-[268px] font-['Abhaya_Libre'] text-[13px] leading-[20px] font-normal tracking-normal text-[#B07636] sm:text-[13px] md:text-[13.5px]">
                  {element}
                </p>
              </div>
            ) : (
              <div className="h-auto w-full max-w-[292px] px-[12px] py-[9px] sm:max-w-[292px] md:h-[38px] lg:h-[38px] lg:w-[292px]">
                <p className="w-full max-w-[268px] font-['Abhaya_Libre'] text-[13px] leading-[20px] font-normal tracking-normal text-[#46483D] sm:text-[13px] md:text-[13.5px]">
                  {element}
                </p>
              </div>
            )}

        ))
         </div>
        } */}

      {List1 && (
        <div className="h-auto w-full max-w-[292px] pt-[16px] sm:max-w-[292px] md:h-[214px] lg:w-[292px]">
          {List1.map((element, index) => (
            <div key={element}>
              {index === 0 ? (
                <div className="min-h-[34px] w-full max-w-[292px] border-l-[3px] border-l-[#B07636] bg-[#FCF3E4] px-[12px] py-[9px] sm:min-h-[36px] md:min-h-[38px] lg:h-[38px] lg:w-[292px]">
                  <p className="w-full max-w-[268px] font-['Abhaya_Libre'] text-[13px] leading-[20px] font-normal tracking-normal text-[#B07636] sm:text-[13px] md:text-[13.5px]">
                    {element}
                  </p>
                </div>
              ) : (
                <div className="h-auto w-full max-w-[292px] px-[12px] py-[9px] sm:max-w-[292px] md:h-[38px] lg:h-[38px] lg:w-[292px]">
                  <p className="w-full max-w-[268px] font-['Abhaya_Libre'] text-[13px] leading-[20px] font-normal tracking-normal text-[#46483D] sm:text-[13px] md:text-[13.5px]">
                    {element}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {mailform && (
        <>
          <div className="h-auto w-full max-w-[292px] pt-[8px] sm:max-w-[292px] md:h-[50px] lg:h-[50px] lg:w-[292px]">
            <p className="w-full max-w-[292px] font-['Abhaya_Libre'] text-[13px] leading-[21px] font-normal tracking-normal text-[#46483D] sm:text-[13px] md:text-[13.5px]">
              {mailform.message}
            </p>
          </div>

          <div className="h-auto w-full max-w-[292px] pt-[16px] sm:max-w-[292px] md:h-[68px] lg:h-[68px] lg:w-[292px]">
            <div className="flex h-auto w-full max-w-[292px] gap-[8px] sm:max-w-[292px] md:h-[52px] lg:h-[52px] lg:w-[292px]">
              <div className="flex h-[52px] w-full max-w-[292px] gap-[10px] rounded-xl border border-[#E3DCC8] bg-white px-[16px] sm:max-w-[292px] md:h-[52px] lg:w-[292px]">
                <input
                  className="w-full max-w-[260px] font-['Inter'] text-[14px] leading-[20px] font-normal tracking-normal text-[#9A8B70] sm:text-[14px] sm:leading-[21px] md:w-[260px] md:text-[15px] md:leading-[22px] lg:w-[260px]"
                  type="text"
                  placeholder={mailform.email}
                />
              </div>
            </div>
          </div>

          <div className="h-auto w-full max-w-[292px] pt-[10px] sm:max-w-[292px] md:h-[54px] lg:h-[54px] lg:w-[292px]">
            <div className="flex h-[44px] w-full max-w-[292px] items-center justify-center rounded-lg bg-[#B07636] sm:max-w-[292px] md:h-[44px] lg:w-[292px]">
              <p className="mx-auto flex w-full max-w-[103px] items-center justify-center font-['Inter'] text-[13px] leading-[19px] font-semibold tracking-normal text-white sm:text-[13px] sm:leading-[19px] md:w-[103px] md:text-[14px] md:leading-[20px] lg:w-[103px]">
                {mailform.button}
              </p>
            </div>
          </div>

          <div className="h-auto w-full max-w-[292px] pt-[10px] sm:max-w-[292px] md:h-[26px] lg:h-[26px] lg:w-[292px]">
            <p className="w-full max-w-[292px] text-center font-['Inter'] text-[10px] leading-[15px] font-normal tracking-normal text-[#9A8B70] sm:text-[10px] sm:leading-[15px] md:w-[292px] md:text-[11px] md:leading-[16px] lg:w-[292px]">
              {mailform.message2}
            </p>
          </div>
        </>
      )}

      {Populartopics && (
        <div className="flex h-auto w-full max-w-[292px] flex-col gap-[12px] sm:max-w-[292px] md:max-w-[292px] lg:w-[292px]">
          {Populartopics.map((element, index) => (
            <>
              <div className="flex h-auto min-h-[29px] w-full max-w-[292px] items-center justify-between border-b border-[#E3DCC8] pb-[8px] sm:min-h-[29px] sm:max-w-[292px] md:h-[29px] md:w-[292px] lg:h-[29px] lg:w-[292px]">
                <div className="h-auto w-full text-[13px] leading-[18px] sm:w-[80px] sm:text-[13px] sm:leading-[19px] md:h-[20px] md:text-[14px] md:leading-[20px] lg:h-[20px] lg:text-[14px] lg:leading-[20px]">
                  <p className="h-auto w-full min-w-[116px] font-['Abhaya_Libre'] text-[12px] leading-[18px] font-normal tracking-normal text-[#000000] sm:text-[12.5px] sm:leading-[19px] md:h-[20px] md:text-[13px] md:leading-[20px] lg:text-[13.5px] lg:leading-[20px]">
                    {element}
                  </p>
                </div>

                <div className="h-[14px] w-[14px]">
                  <div className="h-[5px] w-[7px] text-[#B07636] sm:h-[5.5px] sm:w-[7.5px] md:h-[6px] md:w-[8px] lg:h-[6.71px] lg:w-[9.04px]">
                    <FaLongArrowAltRight className="text-[#B07636]" />
                  </div>
                </div>
              </div>
            </>
          ))}
          <Arrow title="View all topics" />
        </div>
      )}

      {Speaktospeacility && (
        <>
          <div className="flex h-auto w-full max-w-[292px] gap-3">
            <div className="h-[24px] w-[24px]">
              <div className="h-[18.7px] w-[20.5px] text-[#B07636]">
                <Image src="/assests/Blog/haedphone.svg" width={20} height={18} alt="headphone" />
              </div>
            </div>

            <div className="flex min-h-[70px] max-w-[256px] flex-col items-center gap-[6px]">
              <p className="font-inter w-full max-w-[256px] text-[17px] leading-[24px] font-semibold tracking-normal text-[#1A1A10]">
                {Speaktospeacility.text1}
              </p>

              <p className="font-inter w-full max-w-[256px] text-[17px] leading-[24px] font-normal tracking-normal text-[#1A1A10]">
                {Speaktospeacility.text2}
              </p>
            </div>
          </div>

          <div className="flex min-h-[38px] w-full max-w-[138px] items-center gap-[10px] pt-4">
            <div className="h-[18px] w-[18px]">
              {/* <div className="relative top-[10.85px] -left-[0.85px] h-[21.6px] w-[21.6px] text-[#B07636]"> */}
              <div className="h-[16.5px] w-[18px] sm:h-[17.3px] sm:w-[19px] md:h-[18.7px] md:w-[20.5px]">
                <Image src="/assests/Blog/phone.svg" width={21} height={21} alt="phone" />
              </div>
            </div>

            <p className="w-full max-w-[110px] font-['Abhaya_Libre'] text-[14px] leading-[20px] font-semibold text-[#1A1A10] sm:text-[15px] sm:leading-[21px] md:text-[16px] md:leading-[22px]">
              {Speaktospeacility.text3}
            </p>
          </div>
          <div className="pt-[14px]">
            <Arrow title={"Schedule a Call"} />
          </div>
        </>
      )}
    </div>
  );
};
