import AboutusHeader from "./AboutusHeader";
export default function Banner2() {
  const cardData = [
    {
      title: "Pillar I",
      heading: "Decades of Market Wisdom",
      description:
        "A deep-rooted understanding of Indian macros and capital market dynamics, earned across multiple market cycles since 1994.",
    },

    {
      title: "Pillar II",
      heading: "Fiduciary Excellence",
      description:
        "A strict, risk-managed approach centred entirely on investor alignment — we succeed only when our investors do.",
    },

    {
      title: "Pillar III",
      heading: "Customised Alphas",
      description:
        "We move beyond traditional benchmarks to uncover unique, high-conviction opportunities built for structural wealth creation.",
    },
  ];

  return (
    <div>
      <div className="mx-auto w-full max-w-[1440px] bg-[#FCF3E4] px-5 pt-10 pb-10 sm:px-8 sm:pt-12 sm:pb-12 md:px-12 md:pt-16 md:pb-16 lg:px-[80px] lg:py-[80px]">
        <div className="mx-auto min-h-[383px] w-full max-w-[1180px] px-5 sm:px-6 md:px-8 lg:px-[32px]">
          <AboutusHeader
            eyebrow="Trust & Heritage"
            title="Built on a Foundation of Trust & Excellence"
            description="We blend decades of market experience with cutting-edge alternative strategies to safeguard and compound generational wealth for families, entrepreneurs, and institutions."
          />
          {/* <div className="mx-auto flex min-h-[128px] w-full max-w-[660px] flex-col items-center justify-center">
            <span className="font-inter block h-[15px] w-full text-center text-[12px] leading-[100%] font-semibold tracking-[1.92px] text-[#B07636] uppercase">
              Trust & Heritage
            </span>

            <div className="h-[48px] w-full max-w-[660px] pt-[10px]">
              <h2 className="font-abhaya w-full max-w-[660px] text-center text-[24px] leading-[29px] font-semibold text-[#576534] sm:text-[26px] sm:leading-[31px] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-[38px]">
                Built on a Foundation of Trust & Excellence
              </h2>
            </div>
            <div className="h-[65px] w-full max-w-[660px] pt-[14px]">
              <p className="font-abhaya min-h-[51px] w-full max-w-[660px] px-4 py-3 text-center text-[14px] leading-[23px] font-normal text-[#46483D] sm:text-[15px] sm:leading-[25.5px] md:text-[15px] md:leading-[25.5px] lg:text-[15px] lg:leading-[25.5px]">
                We blend decades of market experience with cutting-edge alternative strategies to
                safeguard and compound generational wealth for families, entrepreneurs, and
                institutions.
              </p>
            </div>
          </div> */}

          <div className="flex min-h-[255px] w-full max-w-[1116px] flex-col items-center gap-5 pt-8 sm:gap-5 sm:pt-9 md:gap-[26px] md:pt-10 lg:flex-row lg:pt-[48px]">
            {cardData.map((card , index) => (
              <div key = {index} className={`flex min-h-[207px] w-full max-w-[355px] flex-col items-start justify-start rounded-sm border border-[#B07636] bg-white p-5 shadow-[0px_4px_4px_0px_#00000040] sm:p-6 md:p-7 lg:items-start lg:justify-start lg:p-[34px]`}>
                <span className="font-abhaya h-auto w-full text-center text-[14px] leading-[100%] font-normal text-[#B07636] sm:text-[15px] md:text-[15px] lg:text-start lg:text-[15px]">
                  {card.title}
                </span>
                <div className="h-[39px] w-full max-w-[287px] pt-[14px] text-start sm:max-w-[287px] md:max-w-[287px] lg:max-w-[287px]">
                  <h3 className="font-abhaya w-full max-w-[287px] text-center text-[17px] leading-[23px] font-semibold text-[#576534] sm:text-[18px] sm:leading-[24px] md:text-[19px] md:leading-[25px] lg:text-start lg:text-[19px] lg:leading-[25px]">
                    {card.heading}
                  </h3>
                </div>

                <div className="min-h-[82px] w-full max-w-[287px] px-2 pt-3 sm:pt-3 md:pt-3 lg:pt-3">
                  <p className="font-abhaya min-h-[70px] w-full max-w-[287px] text-center text-[14px] leading-[23.1px] font-normal text-[#46483D] sm:text-[14px] sm:leading-[23.1px] md:text-[14px] md:leading-[23.1px] lg:text-start lg:text-[14px] lg:leading-[23.1px]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*working  code here */}
      </div>
    </div>
  );
}
