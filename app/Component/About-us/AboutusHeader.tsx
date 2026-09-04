type AboutusHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  titleSize?: string;
  desdivHeight?: string;
  heading1color?: string;
  headeing2color?: string;
  heading3color?: string;
};

export default function AboutusHeader({
  eyebrow,
  title,
  description,
  titleSize = "text-[15px]",
  heading1color = "text-[#B07636]",
  headeing2color = "text-[#576534]",
  heading3color = "text-[#46483D]",
}: AboutusHeaderProps) {
  return (
    <div>
      <div className="mx-auto min-h-[128px] max-w-[660px] text-center">
        <span
          className={`font-inter block h-[15px] w-full text-center text-[12px] leading-[100%] font-semibold tracking-[1.92px] ${heading1color} uppercase`}
        >
          {eyebrow}
        </span>

        <div className="min-h-[48px] w-full pt-[10px]">
          <h2
            className={`font-abhaya text-center text-[24px] leading-[29px] font-semibold text-[#576534] sm:text-[26px] sm:leading-[31px] md:text-[28px] md:leading-[34px] ${headeing2color} lg:text-[32px] lg:leading-[38px]`}
          >
            {title}
          </h2>
        </div>

        <div className="mn-h-[65px] w-full pt-[14px]">
          <p
            className={`font-abhaya min-h-[51px] w-full ${heading3color} px-4 py-3 text-center text-[14px] leading-[23px] font-normal text-[#46483D] sm:leading-[25.5px] md:leading-[25.5px] ${titleSize} lg:leading-[25.5px]`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="mx-auto min-h-[96px] w-full max-w-[660px] text-center sm:min-h-[105px] md:min-h-[115px] lg:min-h-[128px]">
    //     <p
    //       className={`font-inter h-[15px] w-full mx-auto max-w-[142px] text-center text-[10px] leading-[100%] font-semibold tracking-[1.5px] text-[#B07636] ${heading1color} uppercase sm:text-[11px] sm:tracking-[1.7px] md:text-[12px] md:tracking-[1.92px]`}
    //     >
    //       {eyebrow}
    //     </p>
    //     <div className="min-h-[40px] w-full max-w-[660px] pt-2.5 sm:min-h-[42px] md:min-h-[44px] lg:min-h-[48px]">
    //       <h2
    //         className={`${headeing2color} font-abhaya h-auto w-full max-w-[660px] text-center text-[24px] leading-[30px] font-semibold text-[#576534] sm:text-[26px] sm:leading-[32px] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-[38px]`}
    //       >
    //         {title}
    //       </h2>
    //     </div>
    //     <div className="min-h-[48px] w-full max-w-[660px] pt-3 sm:min-h-[52px] md:min-h-[58px] lg:min-h-[65px]">
    //       <p
    //         className={` ${heading3color} ${titleSize} font-abhaya w-full text-center text-[14px] leading-[24px] font-normal tracking-[0%] text-[#46483D] sm:text-[14px] sm:leading-[24px] md:text-[15px] md:leading-[25.5px]`}
    //       >
    //         {description}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
