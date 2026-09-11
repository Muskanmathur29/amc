"use client";
import Image from "next/image";
import Bannerimg from "../../assests/BannerimageContainer.svg";

export default function Banner1() {
  return (
    <section className="min-h-[500px] w-full bg-gradient-to-b from-[#576534] to-[#41472D] py-[64px] shadow-[inset_0px_4px_4px_0px_#00000040]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[10px] px-5 py-10 sm:px-8 md:px-12 lg:flex-row lg:items-stretch lg:px-[60px] lg:py-12 xl:gap-[10px] xl:px-[80px] xl:py-0 2xl:px-[100px]">
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex h-auto w-full flex-col items-start justify-center gap-[11px] lg:max-h-[454px] lg:max-w-[615px] lg:min-w-0">
          {/* HEADING */}
          <div className="font-abhaya w-full cursor-pointer text-[40px] leading-[115%] font-light tracking-normal text-white sm:text-[48px] md:text-[56px] lg:text-[58px] xl:text-[64px]">
            <p>Wealth Built on</p>
            <p>Conviction,</p>

            <span className="text-[#C9D1AE]">Not Consensus.</span>
          </div>

          {/* DIVIDER */}
          <div className="ml-0 h-[2px] w-[64px] cursor-pointer bg-[#86693A] sm:ml-[100px] md:ml-[180px] lg:ml-[220px] xl:ml-[275px]" />

          {/* DESCRIPTION */}
          <div className="font-abhaya w-full max-w-[593px] cursor-pointer text-[18px] leading-[100%] font-medium tracking-[0%] text-white sm:text-[20px] md:text-[20px] xl:text-[24px]">
            <p>
              Anand Rathi Asset Management brings the 30-year legacy of the Anand Rathi Group to a
              focused alternative investment platform built for investors who want more than
              benchmark returns.
            </p>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex w-full flex-col items-stretch gap-[10px] sm:flex-row sm:items-center">
            <button
              type="button"
              className="font-abhaya hover: flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-sm bg-white px-[20px] py-[12px] text-center text-[18px] leading-[100%] font-medium whitespace-nowrap text-[#576534] transition-all duration-300 hover:bg-[radial-gradient(circle,_white_0%,_#D5DEC2_100%)] hover:from-white hover:via-white hover:to-[#65724c] sm:w-auto sm:px-[28px] sm:text-[20px]"
            >
              Connect with a Specialist
            </button>

            {/* <button
              type="button"
              className="font-abhaya flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-sm border border-white bg-transparent px-[20px] py-[12px] text-center text-[18px] leading-[100%] font-medium whitespace-normal text-white sm:w-auto sm:px-[28px] sm:text-[20px]"
            >
              Explore our Flagship Equity AIF
            </button> */}

            <button
              type="button"
              className="font-abhaya flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-sm border border-white bg-transparent px-[20px] py-[12px] text-center text-[18px] leading-[100%] font-medium whitespace-normal text-white transition-all duration-300 hover:border-[#D5DEC2] hover:bg-[radial-gradient(circle,_#576534_0%,_#41472D_100%)] hover:text-white sm:w-auto sm:px-[28px] sm:text-[20px]"
            >
              Explore our Flagship Equity AIF
            </button>
          </div>

          {/* ================= BUTTONS ================= */}
        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="group h-[300px] w-full overflow-hidden rounded-[16px] sm:h-[350px] md:h-[400px] lg:h-[454px] lg:w-[615px] lg:min-w-0">
          <div className="h-full w-full cursor-pointer bg-[url('/assests/BannerimageContainer.svg')] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110" />
        </div>
      </div>
    </section>
  );
}
