export default function Banner1() {
  return (
    <div>
      <div className="mx-w-[1440px] min-h-[500px] w-full bg-[url('/assests/About-us/Hero.png')] bg-cover bg-center bg-no-repeat px-5 pt-10 pb-12 sm:min-h-[550px] sm:px-8 sm:pt-12 sm:pb-14 md:min-h-[600px] md:px-12 md:pt-14 md:pb-16 lg:min-h-[656px] lg:px-[80px] lg:pt-[76px] lg:pb-[92px]">
        <div className="mx-auto flex min-h-[316px] w-full max-w-[1180px] flex-col items-start justify-end px-[32px]">
          {/* <div className="min-h-[316px] w-full max-w-[1180px] px-5 sm:px-6 md:px-8 lg:px-[32px]"> */}
          <div className="min-h-[124px] w-full max-w-[780px] pt-[14px]">
            <h1 className="font-abhaya w-full max-w-[780px] text-start text-[30px] leading-[36px] font-semibold text-[#FFFFFF] sm:text-[34px] sm:leading-[40px] md:text-[40px] md:leading-[46px] lg:text-[48px] lg:leading-[54.72px]">
              Three Decades of Conviction, <br />
              <span className="text-[#C9A768]">Not Chance.</span>
            </h1>
          </div>

          <div className="min-h-[106px] w-full max-w-[600px] pt-[22px]">
            <p className="font-abhaya w-full max-w-[600px] text-[14px] leading-[24px] font-normal text-[#E9E9DC] opacity-70 sm:text-[15px] sm:leading-[26px] md:text-[16px] md:leading-[28px]">
              Anand Rathi Asset Management carries forward a multi-decade legacy of the Anand Rathi
              Group — built one research call, one market cycle, and one client relationship at a
              time. We exist to compound wealth deliberately, not accidentally.
            </p>
          </div>

          <div className="flex w-full max-w-[404px] flex-col gap-[14px] pt-[34px] sm:flex-row sm:flex-wrap">
            <button className="font-abhaya flex h-[52px] w-full items-center justify-center gap-[10px] rounded-sm bg-[#B07636] px-[28px] py-[12px] text-white sm:w-[207px]">
              Meet the Leadership
            </button>

            <button className="font-abhaya flex h-[48px] w-full items-center justify-center gap-[10px] rounded-sm border border-white bg-transparent px-[28px] py-[12px] text-white sm:w-[183px]">
              Read Our Story
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
