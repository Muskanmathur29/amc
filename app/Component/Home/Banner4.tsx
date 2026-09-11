import pic1 from "../../assests/Neeraj Gaurh.svg";
import pic2 from "../../assests/Kunal Talreja.svg";
import Image from "next/image";

export default function Banner4() {
  return (
    <section className="h-auto w-full overflow-x-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF3E2_100%)] px-5 pt-[40px] pb-[40px] shadow-[inset_0px_4px_4px_0px_#00000040] sm:px-8 md:px-12 lg:px-16 lg:pt-[64px] xl:px-20">
      {/* MAIN CONTAINER */}
      <div className="mx-auto flex w-full max-w-[1376px] min-w-0 flex-col gap-[40px] lg:gap-[56px]">
        {/* ================= HEADER ================= */}
        <div className="flex w-full min-w-0 flex-col items-center">
          {/* TOP LABEL */}
          <div className="flex w-full min-w-0 items-center justify-center gap-[6px] sm:gap-[8px] lg:gap-[16px]">
            <div className="relative h-[1px] w-[32px] shrink-0 bg-[#576534] sm:w-[48px]">
              <div className="absolute top-1/2 left-0 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3C5430]" />
            </div>

            <p className="w-auto max-w-full cursor-pointer text-center font-['Abhaya_Libre'] text-[16px] leading-[20px] font-bold tracking-[1.5px] text-[#41472D] uppercase sm:text-[18px] sm:tracking-[2.1px] md:text-[20px]">
              LED BY INSTITUTIONAL EXPERTISE
            </p>

            <div className="relative h-[1px] w-[32px] shrink-0 bg-[#576534] sm:w-[48px]">
              <div className="absolute top-1/2 right-0 h-[6px] w-[6px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3C5430]" />
            </div>
          </div>

          {/* TITLE */}
          <div className="mt-6 flex w-full justify-center">
            <h2 className="w-full max-w-[720px] cursor-pointer text-center font-['Abhaya_Libre'] text-[32px] leading-[1.1] font-semibold text-[#5D663B] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px]">
              The Minds Behind the Money
            </h2>
          </div>

          {/* QUOTE */}
          <div className="mt-6 flex w-full min-w-0 items-start justify-center gap-2 sm:gap-4">
            <span className="shrink-0 font-['Abhaya_Libre'] text-[45px] leading-none text-[#76786B] opacity-50 sm:text-[55px] lg:text-[60px]">
              “
            </span>

            <p className="w-full max-w-[1100px] cursor-pointer text-center font-['Italianno'] text-[26px] leading-[1.2] font-normal break-words text-[#41472D] sm:text-[32px] md:text-[38px] lg:text-[48px]">
              True alpha isn't found by following the crowd it comes from rigorous research, strict
              risk discipline, and the conviction to stay with an idea until the market catches up.
            </p>

            <span className="shrink-0 font-['Abhaya_Libre'] text-[45px] leading-none text-[#76786B] opacity-50 sm:text-[55px] lg:text-[60px]">
              ”
            </span>
          </div>
        </div>

        {/* ================= PEOPLE ================= */}
        <div className="mx-auto grid w-full max-w-[1120px] min-w-0 grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8">
          {/* ================= CARD 1 ================= */}
          <div className="flex w-full min-w-0 flex-col items-center gap-5 rounded-[12px] bg-[#FAF8F5] p-5 shadow-[0px_4px_10px_0px_#0000002B] transition-transform duration-500 hover:scale-110 sm:flex-row sm:items-start lg:gap-8 lg:p-8">
            {/* IMAGE */}
            <div className="flex w-full shrink-0 cursor-pointer items-start justify-center sm:w-[112px]">
              <Image
                src="/assests/Neeraj Gaurh.svg"
                alt="Neeraj Gaurh"
                width={112}
                height={100}
                className="h-auto w-[112px] max-w-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="flex w-full min-w-0 flex-col gap-[4px] text-center sm:text-left">
              <p className="w-full cursor-pointer font-['Abhaya_Libre_SemiBold'] text-[22px] leading-[36px] font-semibold text-[#5D663B] lg:text-[25px]">
                Neeraj Gaurh
              </p>

              <p className="w-full cursor-pointer font-['Abhaya_Libre'] text-[13px] leading-[20px] font-semibold tracking-[0.35px] text-[#76786B] uppercase sm:text-[14px]">
                DIRECTOR & FUND MANAGER
              </p>

              <p className="mt-1 w-full cursor-pointer font-['Abhaya_Libre'] text-[13px] leading-[20px] font-normal text-[#5D663B] sm:text-[14px]">
                CFA • PGDM Finance • Ex-Franklin Templeton, Axis Securities
              </p>

              <p className="mt-2 w-full cursor-pointer font-['Abhaya_Libre'] text-[16px] leading-[24px] font-normal text-[#45483D] sm:text-[18px]">
                Over two decades in equity research and portfolio management scaled a flagship PMS
                mandate from ₹10 Cr to ₹540+ Cr in under two years.
              </p>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="flex w-full min-w-0 flex-col items-center gap-5 rounded-[12px] bg-[#FAF8F5] p-5 shadow-[0px_4px_10px_0px_#0000002B] transition-transform duration-500 hover:scale-110 sm:flex-row sm:items-start lg:gap-8 lg:p-8">
            {/* IMAGE */}
            <div className="flex w-full shrink-0 items-start justify-center sm:w-[112px]">
              <Image
                src="/assests/Kunal Talreja.svg"
                alt="Kunal Talreja"
                width={112}
                height={100}
                className="h-auto w-[112px] max-w-full cursor-pointer object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="flex w-full min-w-0 flex-col gap-[4px] text-center sm:text-left">
              <p className="w-full cursor-pointer font-['Abhaya_Libre_SemiBold'] text-[22px] leading-[36px] font-semibold text-[#5D663B] lg:text-[25px]">
                Kunal Talreja
              </p>

              <p className="w-full cursor-pointer font-['Abhaya_Libre'] text-[13px] leading-[20px] font-semibold tracking-[0.35px] text-[#76786B] uppercase sm:text-[14px]">
                FUND MANAGER
              </p>

              <p className="mt-1 w-full cursor-pointer font-['Abhaya_Libre'] text-[13px] leading-[20px] font-normal text-[#5D663B] sm:text-[14px]">
                PGDM Finance • NISM-Certified AIF Manager
              </p>

              <p className="mt-2 w-full cursor-pointer font-['Abhaya_Libre'] text-[16px] leading-[24px] font-normal text-[#45483D] sm:text-[18px]">
                15+ years advising HNI and Ultra-HNI clients across Anand Rathi, Motilal Oswal, and
                Morgan Stanley Advantage Services.
              </p>
            </div>
          </div>
        </div>

        <button className="relative mx-auto flex h-[60px] w-[288px] items-center justify-center gap-3 rounded-md bg-[#576534] px-8 py-4 text-center shadow-[0_2px_4px_0_#00000040] transition-transform duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#576534] hover:to-[#41472D]">
          <h2 className="w-full cursor-pointer text-center font-['Abhaya_Libre'] text-[20px] leading-[24px] font-semibold text-white sm:text-[22px] sm:leading-[26px] md:text-[24px] md:leading-[28px]">
            Latest Market View
          </h2>

          {/* <p className="w-[18px]   text-[20px]  border-[1.5px] asbolute
                    top-[8.25px] left-[3px]  text-white  ">

                    </p>  */}

          <svg
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 4H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M13 1L17 4L13 7"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
