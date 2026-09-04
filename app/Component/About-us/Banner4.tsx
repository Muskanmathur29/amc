import Image from "next/image";
import AboutusHeader from "./AboutusHeader";

let Carddata = [
  {
    Imagedata: "/assests/About-us/Ar.svg",
    Name: "Anand Rathi",
    Role: "Founder & Promoter",
    Description:
      "Founded the Anand Rathi Group in 1994 with a single research desk, building it into a pan-India financial services institution over three decades.",
  },

  {
    Imagedata: "/assests/About-us/Pg.svg",
    Name: "Mr. Pradeep Gupta",
    Role: "Chairman & Managing Director",
    Description:
      "Steers the Group's strategic direction, overseeing its evolution into a diversified financial services powerhouse with two listed entities.",
  },
];
export default function Banner4() {
  return (
    <div>
      <section className="w-full bg-[#FCF3E4] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-20">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6 md:px-8 lg:px-[32px]">
          <AboutusHeader
            eyebrow="Led by Visionaries"
            title="The People Behind the Group"
            description="Institutional discipline, set by the people who built the institution."
            titleSize="text-[23.2px]"
          />
        </div>

        <div className="mx-auto flex min-h-[605px] w-full max-w-[1116px] flex-col items-center justify-center gap-6 pt-8 sm:gap-7 sm:pt-9 md:gap-8 md:pt-10 lg:flex-row lg:gap-8 lg:pt-[48px]">
          {Carddata.map((data) => (
            <div className="min-h-[420px] w-full max-w-[542px] rounded-xl border border-[#E3DCC8] bg-white sm:min-h-[460px] md:min-h-[500px] lg:min-h-[557px]">
              <Image width={502} height={405} src={data.Imagedata} alt="icon" className=" " />
              <div className="flex min-h-[120px] w-full max-w-[542px] flex-col items-center justify-center px-5 py-5 sm:px-6 sm:py-5 md:px-[26px] md:py-6 lg:min-h-[152px]">
                <h2 className="font-abhaya w-full max-w-[490px] text-center text-[20px] leading-[22px] font-bold text-[#2E2E2C] sm:text-[21px] sm:leading-[23px] md:text-[22px] md:leading-[24px] lg:text-start lg:text-[24px] lg:leading-[25px]">
                  {data.Name}
                </h2>
                <div className="w-full max-w-[490px] pt-1 pb-3 text-center sm:pt-1 sm:pb-3 md:pt-1 md:pb-3 lg:pt-1 lg:pb-3 lg:text-start">
                  <span className="font-inter block w-full max-w-[490px] text-[11px] leading-[16px] font-semibold tracking-[0.38px] text-[#B07636] uppercase sm:text-[11.5px] sm:leading-[17px] md:text-[12px] md:leading-[18px] lg:text-[12.5px] lg:leading-[18px]">
                    {data.Role}
                  </span>
                </div>
                <p className="font-abhaya w-full max-w-[490px] text-center text-[13px] leading-[20px] font-normal text-[#46483D] sm:text-[13.5px] sm:leading-[21px] md:text-[14px] md:leading-[22px] lg:text-start lg:text-[14.5px] lg:leading-[22.3px]">
                  {data.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
