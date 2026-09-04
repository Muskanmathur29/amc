import AboutusHeader from "./AboutusHeader";
export default function Banner7() {
  return (
    <div>
      <section className="min-h-[280px] w-full bg-[#41472D] py-10 sm:min-h-[290px] sm:py-12 md:min-h-[310px] md:py-14 lg:min-h-[334px] lg:py-16">
        <div className="mx-auto flex min-h-[206px] w-full max-w-[1180px] flex-col items-center justify-center px-5 sm:px-6 md:px-8 lg:px-8">
          <AboutusHeader
            eyebrow="Join the Conviction"
            title="Ready to Put Three Decades of Discipline to Work?"
            description="Speak with a specialist about our flagship Category III AIF, or read the fund manager's latest market view before you decide."
            titleSize="text-[15px]"
            heading1color="text-[#B07636]"
            headeing2color="text-[#FFFFFF]"
            heading3color="text-[#C6C8B8]"
          />
          <div className="flex min-h-[80px] w-full max-w-[579px] flex-col gap-3.5 pt-7 sm:pt-7 md:pt-7 lg:flex-row lg:pt-7">
            <button className="font-abhaya flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-sm bg-[#B07636] px-5 py-2.5 sm:min-h-[50px] sm:px-6 md:min-h-[52px] md:px-7 lg:min-h-[52px] lg:max-w-[243px] lg:px-7">
              <p className="font-abhaya h-auto w-full text-[16px] leading-[24px] font-semibold text-white sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
                Connect with a Specialist
              </p>
            </button>

            <button className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-sm border border-white px-5 py-3 sm:px-6 md:px-6 lg:max-w-[322px]">
              <p className="font-abhaya h-auto w-full text-[16px] leading-[100%] font-semibold text-white sm:text-[18px] md:text-[20px]">
                Explore Our Flagship Equity AIF
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
