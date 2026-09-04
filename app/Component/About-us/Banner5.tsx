import Image from "next/image";

let carddata = [
  {
    Image: "/assests/About-us/Neerajgurah.svg",
    Name: "Neeraj Gaurh",
    Role: "DIRECTOR & FUND MANAGER",
    btn1: "CFA Charterholder",
    btn2: "PGDM Finance",
    des1: "With nearly two decades across investment management, equity research and portfolio advisory, Neeraj leads the firm's investment strategy — pairing institutional expertise with deep, ground-level research.",
    des2: "Before joining, he held key roles at Franklin Templeton and Axis Securities. His approach centres on fundamental research, capital preservation and superior risk-adjusted returns.",
    years: "20",
    StatCard: "Scaled a PMS mandate from ₹10 Cr to ₹540+ Cr in AUM within two years.",
  },
  {
    Image: "/assests/About-us/Kunaltalreja.svg",
    Name: "Kunal Talreja",
    Role: "FUND MANAGER",
    btn1: "PGDM Finance",
    btn2: "NISM-Certified AIF",
    des1: "Kunal brings 13+ years in investment advisory, portfolio management and wealth solutions for HNI and Ultra-HNI investors across Anand Rathi, Motilal Oswal and Morgan Stanley.",
    des2: "A PGDM finance professional and NISM-certified AIF manager, his expertise spans product evaluation, portfolio strategy and research-driven advisory across asset classes.",
    years: "13",
    StatCard:
      "Trusted by HNI & UHNI clients across market cycles with a research-led, disciplined approach.",
  },
];
export default function Banner5() {
  return (
    <div>
      <div className="mx-auto w-full max-w-[1440px] bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-[100px] lg:py-[96px]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-2 sm:gap-2 md:gap-[10px] lg:min-h-[160px]">
          <span className="font-inter block w-full max-w-[103px] text-[12px] leading-[12px] font-medium tracking-[2.64px] text-[#B07636] sm:text-[12px] sm:leading-[12px] md:text-[13px] md:leading-[13px] lg:text-[13px] lg:leading-[13px]">
            SECTION 02
          </span>
          <h2 className="font-abhaya w-full max-w-[308px] text-[30px] leading-[30px] font-semibold text-[#41472D] sm:text-[34px] sm:leading-[34px] md:text-[38px] md:leading-[38px] lg:text-[44px] lg:leading-[44px]">
            AMC & The Team
          </h2>
          <div className="h-[3px] w-[48px] bg-[#B07636] sm:w-[52px] md:w-[58px] lg:w-[64px]"></div>
          <h3 className="font-abhaya w-full max-w-[371px] text-[18px] leading-[18px] font-semibold text-[#2E2E2C] sm:text-[19px] sm:leading-[19px] md:text-[20px] md:leading-[20px] lg:text-[22px] lg:leading-[22px]">
            Institutional Expertise, Not a Blank Slate.
          </h3>
          <p className="font-inter w-full max-w-[652px] text-[13px] leading-[19.5px] font-normal text-[#46483D] sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22.5px] lg:text-[15px] lg:leading-[22.5px]">
            The people running this fund built their careers managing money before they built this
            AMC.
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 sm:gap-5 md:gap-6 lg:min-h-[412px] lg:flex-row">
          {carddata.map((data) => (
            <div className="flex min-h-[360px] w-full max-w-[608px] flex-col gap-4 rounded-2xl border border-[#F2E8CE] bg-[#FCF3E4] p-5 sm:min-h-[380px] sm:gap-4 sm:p-5 md:min-h-[400px] md:gap-[18px] md:p-6 lg:min-h-[412px]">
              <div className="mx-auto flex w-full max-w-[560px] flex-col items-center justify-center gap-4 sm:gap-5 md:gap-5 lg:min-h-[264px] lg:flex-row">
                <div className="max-h-[212px] max-w-[157px] rounded-xl">
                  <Image width={212} height={157} src={data.Image} alt="icon" className=" " />
                </div>
                <div className="flex w-full max-w-[383px] flex-col gap-2">
                  <h3 className="font-abhaya w-full text-center text-[17px] leading-[17px] font-semibold text-[#41472D] sm:text-[18px] sm:leading-[18px] md:text-[19px] md:leading-[19px] lg:text-start lg:text-[20px] lg:leading-[20px]">
                    {data.Name}
                  </h3>
                  <span className="font-inter block w-full text-center text-[12px] leading-[12px] font-medium tracking-[0.24px] text-[#B07636] sm:text-[12px] sm:leading-[12px] md:text-[13px] md:leading-[13px] md:tracking-[0.26px] lg:text-start lg:text-[13px] lg:leading-[13px] lg:tracking-[0.26px]">
                    {data.Role}
                  </span>
                  <div className="flex h-6 w-full items-center justify-center gap-2 lg:justify-start">
                    <div className="min-h-[24px] w-auto rounded-[20px] border border-[#F2E8CE] bg-[#FCF3E4] px-3 py-[5px]">
                      <span className="font-inter block w-full text-[10px] leading-[10px] font-medium tracking-[0.2px] text-[#76511D] sm:text-[10.5px] sm:leading-[10.5px] md:text-[11px] md:leading-[11px] md:tracking-[0.22px] lg:text-[11.5px] lg:leading-[11.5px] lg:tracking-[0.23px]">
                        {data.btn1}
                      </span>
                    </div>

                    <div className="min-h-[24px] w-auto rounded-[20px] border border-[#F2E8CE] bg-[#FCF3E4] px-3 py-[5px]">
                      <span className="font-inter block w-full text-[11.5px] leading-[11.5px] font-medium tracking-[0.23px] text-[#76511D]">
                        {data.btn2}
                      </span>
                    </div>
                  </div>

                  <p className="font-inter h-auto max-w-[355px] text-center text-[12px] leading-[19px] font-normal text-[#46483D] sm:text-[12.5px] sm:leading-[20px] md:text-[13px] md:leading-[20.54px] lg:text-start lg:text-[13px] lg:leading-[20.54px]">
                    {data.des1}
                  </p>
                  <p className="font-inter max-w-[355px] text-center text-[12px] leading-[19px] font-normal text-[#46483D] sm:text-[12.5px] sm:leading-[20px] md:text-[13px] md:leading-[20.54px] lg:text-start lg:text-[13px] lg:leading-[20.54px]">
                    {data.des2}
                  </p>
                </div>
              </div>
              <div className="flex min-h-[82px] w-full max-w-[560px] flex-col items-center justify-center gap-2 sm:gap-2 md:gap-3 lg:flex-row">
                <div className="flex min-h-[70px] w-full max-w-[163px] flex-col gap-0.5 rounded-xl bg-[#41472D] px-4 py-3 sm:min-h-[74px] sm:px-[17px] sm:py-[14px] md:min-h-[78px] md:px-[18px] md:py-[15px] lg:h-[82px] lg:px-[18px] lg:py-4">
                  <span className="font-abhaya block w-full  text-center text-[24px] leading-[100%] font-semibold text-[#F9E1BD] sm:text-[26px] md:text-[28px] lg:text-start lg:text-[30px] text-center">
                    {data.years}+
                  </span>
                  {/* <p className="font-inter h-auto w-full text-[10px] leading-[10px] font-normal tracking-[0.2px] text-[#C9D1AE] sm:text-[10.5px] sm:leading-[10.5px] sm:tracking-[0.21px] md:text-[11px] md:leading-[11px] md:tracking-[0.22px] lg:text-[11px] lg:leading-[11px] lg:tracking-[0.22px]">
                  YEARS OF EXPERIENCE
                </p> */}
                  <span className="font-inter block w-full text-[10px] leading-[10px] font-normal tracking-[0.2px] whitespace-nowrap text-[#C9D1AE] sm:text-[10.5px] sm:leading-[10.5px] sm:tracking-[0.21px] md:text-[11px] md:leading-[11px] md:tracking-[0.22px] lg:text-start lg:text-[11px] lg:leading-[11px] lg:tracking-[0.22px]">
                    YEARS OF EXPERIENCE
                  </span>
                </div>
                <div className="flex min-h-[70px] w-full max-w-[385px] flex-col gap-2 rounded-xl border border-[#F2E8CE] bg-white p-4 sm:min-h-[74px] md:min-h-[78px] lg:min-h-[82px]">
                  <p className="font-inter w-full text-center text-[11px] leading-[16.5px] font-normal text-[#46483D] sm:text-[11.5px] sm:leading-[17.25px] md:text-[12px] md:leading-[18px] lg:text-start lg:text-[12.5px] lg:leading-[18.75px]">
                    {data.StatCard}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
