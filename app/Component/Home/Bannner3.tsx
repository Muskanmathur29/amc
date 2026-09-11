import img1 from "../../assests/banner31.svg";
import img2 from "../../assests/banner32.svg";
import img3 from "../../assests/banner33.svg";
import Image from "next/image";

export default function Bannner3() {
  return (
    <section className="w-full overflow-hidden bg-[#FCF3E4]">
      {/* MAIN SECTION */}
      <div className="flex min-h-[500px] w-full flex-col items-center gap-8 bg-[#FCF3E4] px-5 py-[56px] shadow-[inset_0_4px_4px_0_#00000040,inset_0_-4px_4px_0_#00000040] sm:px-8 md:px-12 lg:flex-row lg:px-16 xl:gap-[40px] xl:px-20">
        {/* CONTENT CONTAINER */}
        <div className="mx-auto flex w-full max-w-[1440px] min-w-0 flex-col items-center justify-between gap-8 lg:flex-row xl:gap-10">
          {/* ================= LEFT ================= */}
          <div className="flex w-full flex-col gap-[7px] lg:max-w-[430px] lg:min-w-0 lg:flex-1">
            {/* HEADING */}
            <div className="w-full">
              <h2 className="w-full cursor-pointer font-['Abhaya_Libre'] text-[32px] leading-[30px] font-bold tracking-[-0.52px] text-[#1A1A10] md:text-[42px] md:leading-[40px] lg:text-[48px] lg:leading-[55px] xl:text-[52px] xl:leading-[58.76px]">
                Three Decades. One Discipline.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full pt-6">
              <p className="w-full cursor-pointer font-['Abhaya_Libre'] text-[16px] leading-[20px] font-normal text-[#46483D] md:text-[18px] lg:text-[20px] lg:leading-[26px] xl:text-[23px] xl:leading-[28px]">
                Three decades of disciplined growth have transformed the Anand Rathi Group into a
                diversified financial services institution, serving investors across India through
                research-led expertise.
              </p>
            </div>
          </div>

          {/* ================= CARDS ================= */}
          <div className="grid w-full min-w-0 grid-cols-1 gap-[15px] sm:grid-cols-2 lg:min-w-0 lg:flex-1 lg:grid-cols-3 lg:gap-[20px] xl:gap-[23px]">
            {/* CARD 1 */}
            <div className="w-full min-w-0 overflow-hidden rounded-[19px] shadow-[0px_4px_4px_0px_#00000040] transition-transform duration-500 hover:scale-110">
              <Image
                src="/assests/banner31.svg"
                width={100}
                height={100}
                alt="Anand Rathi Group founded"
                className="block h-auto w-full cursor-pointer"
              />

              <div className="min-h-[158px] w-full overflow-hidden bg-[#F7F3EA] px-5 py-4">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="cursor-pointer font-['Abhaya_Libre'] text-[38px] leading-[45px] font-bold text-[#B07636]">
                    1994
                  </p>

                  <div className="w-[30px] border border-[#B07636]" />
                </div>

                <p className="mt-2 w-full cursor-pointer text-center font-['Abhaya_Libre'] text-[15px] leading-[20px] tracking-[-0.38px] text-[#1A1A10] lg:text-left">
                  Anand Rathi Group
                  <br />
                  Founded
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="w-full min-w-0 overflow-hidden rounded-[19px] shadow-[0px_4px_4px_0px_#00000040] transition-transform duration-500 hover:scale-110">
              <Image
                src="/assests/banner32.svg"
                width={100}
                height={100}
                alt="Institutional equity professionals"
                className="block h-auto w-full cursor-pointer"
              />

              <div className="min-h-[158px] w-full overflow-hidden bg-[#F7F3EA] px-5 py-4">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="cursor-pointer font-['Abhaya_Libre'] text-[38px] leading-[45px] font-bold text-[#B07636]">
                    100+
                  </p>

                  <div className="w-[30px] border border-[#B07636]" />
                </div>

                <p className="mt-2 cursor-pointer w-full text-center font-['Abhaya_Libre'] text-[15px] leading-[20px] tracking-[-0.38px] text-[#1A1A10] lg:text-left">
                  Institutional equity
                  <br />
                  professionals
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="w-full min-w-0 transition-transform duration-500 hover:scale-110 overflow-hidden rounded-[19px] shadow-[0px_4px_4px_0px_#00000040]">
              <Image
                src="/assests/banner33.svg"
                width={100}
                height={100}
                alt="Companies under active research coverage"
                className="block h-auto w-full"
              />

              <div className="min-h-[158px] w-full overflow-hidden bg-[#F7F3EA] px-5 py-4">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="cursor-pointer font-['Abhaya_Libre'] text-[38px] leading-[45px] font-bold text-[#B07636]">
                    200+
                  </p>

                  <div className="w-[30px] border border-[#B07636]" />
                </div>

                <p className="cursor-pointer mt-2 w-full text-center font-['Abhaya_Libre'] text-[15px] leading-[20px] tracking-[-0.38px] text-[#1A1A10] lg:text-left">
                  Companies under active
                  <br />
                  research coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
