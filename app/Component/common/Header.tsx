"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../../assests/logo.svg";
import Link from "next/link";

import { RiArrowDropDownLine, RiMenuLine, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 w-full rounded-br-[8px] rounded-bl-[8px] bg-white shadow-[0_-4px_4px_0_#00000040]">
      {/* ================= HEADER CONTAINER ================= */}

      <div className="mx-auto flex min-h-[80px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-4 md:px-10 lg:gap-6 lg:px-[50px] lg:py-5 xl:gap-8 xl:px-[60px] 2xl:px-[50px]">
        {/* ================= LOGO ================= */}

        <div className="w-[130px] shrink-0 sm:w-[150px] md:w-[160px] lg:w-[180px]">
          <Image
            src="/assests/logo.svg"
            alt="Logo"
            width={180}
            height={50}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* ================= DESKTOP NAV ================= */}

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center justify-center gap-[12px] whitespace-nowrap xl:gap-[17px]">
            {/* HOME */}

            <Link href="/">
              <li className="font-abhaya cursor-pointer text-[18px] text-[#B07636] underline decoration-[#B07636] decoration-2 underline-offset-8 xl:text-[20px] xl:underline-offset-10">
                Home
              </li>
            </Link>

            {/* OUR OFFERING */}

            <li className="font-abhaya flex cursor-pointer items-center gap-0.5 text-[18px] whitespace-nowrap text-[#2E2E2C] xl:gap-1 xl:text-[20px]">
              Our Offering
              <RiArrowDropDownLine className="shrink-0 text-[#B07636]" size={22} />
            </li>

            {/* MEDIA */}

            <li className="font-abhaya cursor-pointer text-[18px] text-[#2E2E2C] xl:text-[20px]">
              Media
            </li>

            {/* BLOGS */}

            <li className="font-abhaya cursor-pointer text-[18px] text-[#2E2E2C] xl:text-[20px]">
              Blogs
            </li>

            {/* ABOUT */}

            <Link href="/About-us">
              <li className="font-abhaya cursor-pointer text-[18px] whitespace-nowrap text-[#2E2E2C] xl:text-[20px]">
                About Us
              </li>
            </Link>

            {/* CONTACT */}

            <li className="font-abhaya cursor-pointer text-[18px] whitespace-nowrap text-[#2E2E2C] xl:text-[20px]">
              Contact Us
            </li>
          </ul>
        </nav>

        {/* ================= DESKTOP BUTTONS ================= */}

        <div className="hidden shrink-0 items-center justify-end gap-[10px] lg:flex xl:gap-[16px]">
          {/* PRIVATE BRIEFING */}

          <button className="font-abhaya cursor-pointer rounded-sm bg-[#576534] px-[8px] py-[7px] text-[17px] leading-[28px] font-normal whitespace-nowrap text-[#F9E1BD] shadow-[inset_0_4px_4px_0_#00000040] transition duration-200 hover:opacity-90 xl:py-[8px] xl:text-[20px]">
            Schedule a Private Briefing
          </button>

          {/* LOGIN */}

          <button className="shrink-0 cursor-pointer rounded-sm border border-[#9A8B70] px-[8px] py-[6px] transition duration-200 hover:bg-[#F7F3EA]">
            <span className="font-abhaya text-[18px] font-normal text-[#9A8B70] xl:text-[20px]">
              Login
            </span>
          </button>
        </div>

        {/* ================= MOBILE / TABLET MENU BUTTON ================= */}

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-[40px] w-[40px] shrink-0 cursor-pointer items-center justify-center rounded-md text-[#576534] transition duration-200 hover:bg-[#F7F3EA] lg:hidden"
        >
          {menuOpen ? <RiCloseLine size={32} /> : <RiMenuLine size={32} />}
        </button>
      </div>

      {/* ========================================================= */}
      {/* MOBILE + TABLET MENU                                      */}
      {/* ========================================================= */}

      {menuOpen && (
        <div className="w-full border-t border-[#E5E5E5] bg-white lg:hidden">
          <nav className="mx-auto w-full max-w-[1440px] px-5 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8">
            {/* ================= MOBILE NAV ================= */}

            <ul className="flex flex-col gap-5 sm:gap-6">
              {/* HOME */}

              <li className="font-abhaya w-fit cursor-pointer text-[20px] text-[#B07636] underline decoration-[#B07636] decoration-2 underline-offset-8 sm:text-[21px] md:text-[22px]">
                Home
              </li>

              {/* OUR OFFERING */}

              <li className="font-abhaya flex w-fit cursor-pointer items-center text-[20px] text-[#2E2E2C] sm:text-[21px] md:text-[22px]">
                Our Offering
                <RiArrowDropDownLine className="text-[#B07636]" size={26} />
              </li>

              {/* MEDIA */}

              <li className="font-abhaya cursor-pointer text-[20px] text-[#2E2E2C] sm:text-[21px] md:text-[22px]">
                Media
              </li>

              {/* BLOGS */}

              <li className="font-abhaya cursor-pointer text-[20px] text-[#2E2E2C] sm:text-[21px] md:text-[22px]">
                Blogs
              </li>

              {/* ABOUT */}

              <li className="font-abhaya cursor-pointer text-[20px] text-[#2E2E2C] sm:text-[21px] md:text-[22px]">
                About Us
              </li>

              {/* CONTACT */}

              <li className="font-abhaya cursor-pointer text-[20px] text-[#2E2E2C] sm:text-[21px] md:text-[22px]">
                Contact Us
              </li>
            </ul>

            {/* ================= MOBILE BUTTONS ================= */}

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8">
              {/* PRIVATE BRIEFING */}

              <button className="font-abhaya w-full cursor-pointer rounded-sm bg-[#576534] px-[8px] py-[9px] text-[18px] leading-[28px] font-normal text-[#F9E1BD] shadow-[inset_0_4px_4px_0_#00000040] transition duration-200 hover:opacity-90 sm:text-[19px] md:text-[20px]">
                Schedule a Private Briefing
              </button>

              {/* LOGIN */}

              <button className="w-full cursor-pointer rounded-sm border border-[#9A8B70] px-[8px] py-[9px] transition duration-200 hover:bg-[#F7F3EA]">
                <span className="font-abhaya text-[18px] font-normal text-[#9A8B70] sm:text-[19px] md:text-[20px]">
                  Login
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
