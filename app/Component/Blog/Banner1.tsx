export default function Banner1() {
  return (
    // <div>
    //   <section className="min-h-[500px] w-full bg-gradient-to-b from-[#576534] overflow-hidden  to-[#41472D] px-5 py-12 sm:min-h-[540px] sm:px-8 sm:py-16 md:min-h-[580px] md:px-12 md:py-20 lg:min-h-[620px] lg:px-16 lg:py-24 xl:min-h-[653px] xl:px-20 xl:py-24">
    //     <div className="h-full w-full bg-[url('/assests/Blog/HeroBackground.svg')] opacity-40 mix-blend-overlay sm:h-[540px] md:h-[580px] lg:h-[653px] xl:h-[620px]"></div>
    //   </section>
    // </div>

    <section className="relative min-h-[500px] w-full overflow-hidden bg-gradient-to-b from-[#576534] to-[#41472D] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[620px]">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full bg-[url('/assests/Blog/HeroBackground.svg')] bg-cover bg-center bg-no-repeat px-5 py-12 opacity-40 mix-blend-overlay sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:min-h-[653px] xl:px-20 xl:py-24" />
      <div className="relative z-10 mx-auto flex h-full min-h-[500px] w-full max-w-[1440px] flex-col items-start justify-center gap-4 sm:min-h-[540px] sm:px-8 sm:py-16 md:min-h-[580px] md:px-12 md:py-20 lg:min-h-[620px] lg:px-16 lg:py-24 xl:min-h-[653px] xl:px-20 xl:py-24">
        <div className="flex h-auto w-full max-w-[624px]">
          <div className="min-h-[80px] w-full max-w-[624px] font-['Abhaya_Libre'] text-[36px] leading-[40px] font-semibold tracking-[0px] text-white sm:min-h-[90px] sm:text-[42px] sm:leading-[46px] md:min-h-[100px] md:text-[50px] md:leading-[52px] lg:min-h-[120px] lg:text-[60px] lg:leading-[60px]">
            Ideas that Inform. Insights that Empower.
          </div>
        </div>
        <div className="min-h-[50px] w-full max-w-[512px] pt-2 sm:min-h-[54px] md:min-h-[60px] lg:min-h-[67px]">
          <div className="min-h-[48px] w-full max-w-[505px] font-['Abhaya_Libre'] text-[18px] leading-[23px] font-normal tracking-[0px] text-[#E8E8E8] sm:min-h-[50px] sm:text-[20px] sm:leading-[25px] md:min-h-[54px] md:text-[22px] md:leading-[27px] lg:min-h-[59px] lg:text-[24px] lg:leading-[29.25px]">
            Thought leadership on markets, economy, investing strategies and long-term wealth
            creation.
          </div>
        </div>

        {/*  */}
      </div>
    </section>
  );
}
