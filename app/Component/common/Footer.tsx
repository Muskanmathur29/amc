
import Image from "next/image";
import { Abhaya_Libre } from "next/font/google";

import pic from "../assests/Aritlogo.svg";
import Linkedin from "../assests/LinkedIn.png";
import twitter from "../assests/twitter.png";
import instagram from "../assests/Instagram.png";
import Facebook from "../assests/Facebook.png";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer
      className={`
        ${abhayaLibre.className}
        w-full
        text-white
        overflow-hidden
        bg-[linear-gradient(180deg,#576534_0%,#41472D_100%)]
      `}
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}
      <div
        className="
          w-full
          max-w-[1240px]
          mx-auto
          px-5
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-0
          pt-8
          sm:pt-9
          md:pt-10
          lg:pt-11
          pb-5
        "
      >

        {/* =====================================================
            FIRST ROW
            LOGO + COMPANY + COMPLIANCE + GET IN TOUCH
        ===================================================== */}
        <div
          className="
            w-full
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            items-start
          "
        >

          {/* =================================================
              COLUMN 1
              LOGO
          ================================================= */}
          <div
            className="
              w-full
              lg:pr-10
            "
          >
            {/* LOGO */}
            <div
              className="
                w-full
                max-w-[338px]
              "
            >
              <Image
                src= "/assests/Aritlogo.svg"
                alt="Anand Rathi Asset Management"   
                width={338}
                height={100}
          
                className="
                  w-full
                  h-auto
                  block
                "
              />
            </div>

            {/* DESCRIPTION */}
            {/* <p
              className="
                w-full
                max-w-[355px]
                mt-5
                text-white
                text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[20px]
                leading-[16px]
                sm:leading-[17px]
                md:leading-[18px]
                lg:leading-[26px]
                font-normal
              "
            >
              Authoritative wealth management for the global Indian citizen.
              Authorized and regulated by the Financial Services Authority.
            </p> */}  


            <p className="
    w-full
    max-w-[350px]
    mt-5
    text-white
    text-[20px]
    leading-[26px]
    font-normal
  "
>
  Authoritative wealth management for the global Indian citizen. Authorized
  and regulated by the Financial Services Authority.
</p>


            {/* SOCIAL ICONS */}
            <div
              className="
                flex
                items-center
                gap-3
                mt-7
              "
            >
              {/* LINKEDIN */}
              <div
                className="
                  w-[28px]
                  h-[28px]
                  sm:w-[30px]
                  sm:h-[30px]
                  lg:w-[36px]
                  lg:h-[36px]
                  rounded-full
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Image
                  src= "/assests/LinkedIn.png"  
                  width  = {14} 
                  height = {14}  
                  alt="LinkedIn"
                  className="
                    w-[14px]
                    h-[14px]
                    lg:w-[17px]
                    lg:h-[17px]
                    object-contain
                  "
                />
              </div>

              {/* TWITTER */}
              <div
                className="
                  w-[28px]
                  h-[28px]
                  sm:w-[30px]
                  sm:h-[30px]
                  lg:w-[36px]
                  lg:h-[36px]
                  rounded-full
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Image
                  src= "/assests/twitter.png"  
                    width  = {14} 
                    height  = {14}
                  alt="Twitter"
                  className="
                    w-[14px]
                    h-[14px]
                    lg:w-[17px]
                    lg:h-[17px]
                    object-contain
                  "
                />
              </div>

              {/* FACEBOOK */}
              <div
                className="
                  w-[28px]
                  h-[28px]
                  sm:w-[30px]
                  sm:h-[30px]
                  lg:w-[36px]
                  lg:h-[36px]
                  rounded-full
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Image
                  src= "/assests/Facebook.png" 
                   width = {14} 
                   height  = {14}
                  alt="Facebook"
                  className="
                    w-[14px]
                    h-[14px]
                    lg:w-[17px]
                    lg:h-[17px]
                    object-contain
                  "
                />
              </div>

              {/* INSTAGRAM */}
              <div
                className="
                  w-[28px]
                  h-[28px]
                  sm:w-[30px]
                  sm:h-[30px]
                  lg:w-[36px]
                  lg:h-[36px]
                  rounded-full
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Image
                  src="/assests/Instagram.png" 
                    width={36} 
                    height={36}
                  alt="Instagram"
                  className="
                    w-[14px]
                    h-[14px]
                    lg:w-[17px]
                    lg:h-[17px]
                    object-contain
                  "
                />
              </div>
            </div>
          </div>


          {/* =================================================
              COLUMN 2
              COMPANY
          ================================================= */}
          <div
            className="
              w-full
              border-l
              border-white/10
              pl-5
              lg:pl-[30px]
              pr-5
              mt-8
              sm:mt-8
              lg:mt-0
            "
          >
            <h3
              className="
                m-0
                text-white
                text-[10px]
                sm:text-[11px]
                md:text-[12px]
                lg:text-[15px]
                font-normal
                whitespace-nowrap
              "
            >
              COMPANY
            </h3>

            <div
              className="
                w-[19px]
                lg:w-[30px]
                h-[2px]
                bg-white
                mt-2
                lg:mt-3
              "
            />

            <div
              className="
                flex
                flex-col
                gap-3
                lg:gap-[14px]
                mt-4
                lg:mt-6
                text-[10px]
                sm:text-[11px]
                md:text-[12px]
                lg:text-[15px]
                leading-[16px]
                lg:leading-[20px]
              "
            >
              <a
                href="#"
                className="
                  flex
                  items-center
                  justify-between
                  text-white
                  no-underline
                  hover:opacity-70
                  whitespace-nowrap
                "
              >
                <span>Career</span>
                <span className="text-[18px]">›</span>
              </a>

              {/* GROUP COMPANIES */}
              <div>
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    text-white
                  "
                >
                  <span>Group Companies</span>

                  <span className="text-[18px]">
                       ⌄
                  </span>
                </div>

                {/* <div
                  className="
                    flex
                    flex-col
                    gap-[9px]
                    mt-3
                    text-[13px]
                    leading-[18px]
                  "
                >
                  <span>Group</span>
                  <span>ARIT</span>
                  <span>Institutional Equities</span>
                  <span>Insurance Broking</span>
                  <span>Investment Banking</span>
                  <span>NBFC</span>
                  <span>OFA</span>
                  <span>PMS</span>
                  <span>Private wealth</span>
                  <span>Global Investing</span>
                </div> */}
              </div>

              <a
                href="#"
                className="
                  flex
                  items-center
                  justify-between
                  text-white
                  no-underline
                  hover:opacity-70
                  whitespace-nowrap
                "
              >
                <span>Downloads</span>
                <span className="text-[18px]">›</span>
              </a>
            </div>
          </div>


          {/* =================================================
              COLUMN 3
              COMPLIANCE
          ================================================= */}
          <div
            className="
              w-full
              border-l
              border-white/10
              pl-5
              lg:pl-[30px]
              pr-5
              mt-8
              sm:mt-8
              lg:mt-0
            "
          >
            <h3
              className="
                m-0
                text-white
                text-[10px]
                sm:text-[11px]
                md:text-[12px]
                lg:text-[15px]
                font-normal
                whitespace-nowrap
              "
            >
              COMPLIANCE
            </h3>

            <div
              className="
                w-[19px]
                lg:w-[30px]
                h-[2px]
                bg-white
                mt-2
                lg:mt-3
              "
            />

            <div
              className="
                flex
                flex-col
                gap-5
                mt-5
                lg:mt-6
                text-[10px]
                sm:text-[11px]
                md:text-[12px]
                lg:text-[15px]
                leading-[20px]
              "
            >
              <a
                href="#"
                className="
                  flex
                  items-center
                  justify-between
                  text-white
                  no-underline
                  hover:opacity-70
                  whitespace-nowrap
                "
              >
                <span>Disclosures</span>
                <span className="text-[18px]">›</span>
              </a>

              <a
                href="#"
                className="
                  flex
                  items-center
                  justify-between
                  text-white
                  no-underline
                  hover:opacity-70
                  whitespace-nowrap
                "
              >
                <span>SEBI Scores</span>
                <span className="text-[18px]">›</span>
              </a>
            </div>
          </div>


          {/* =================================================
              COLUMN 4
              GET IN TOUCH
          ================================================= */}
          <div
            className="
              w-full
              border-l
              border-white/10
              pl-5
              lg:pl-[30px]
              mt-8
              sm:mt-8
              lg:mt-0
            "
          >
            <h3
              className="
                m-0
                text-white
                text-[10px]
                sm:text-[11px]
                md:text-[12px]
                lg:text-[15px]
                font-normal
                whitespace-nowrap
              "
            >
              GET IN TOUCH
            </h3>

            <div
              className="
                w-[19px]
                lg:w-[30px]
                h-[2px]
                bg-white
                mt-2
                lg:mt-3
              "
            />

            <div
              className="
                flex
                flex-col
                gap-6
                mt-5
                lg:mt-6
                text-white
                text-[9px]
                sm:text-[10px]
                md:text-[11px]
                lg:text-[15px]
                leading-[16px]
                lg:leading-[23px]
              "
            >
              {/* EMAIL */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <span className="text-[18px] shrink-0">
                  ✉
                </span>

                <span>
                  reachus@anandrathi.com
                </span>
              </div>

              {/* ADDRESS */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <span className="text-[18px] shrink-0">
                  ♧
                </span>

                <p className="m-0">
                  Registered Office:
                  <br />
                  Express Zone A Wing, 10th Floor,
                  <br />
                  Western Express Highway,
                  <br />
                  Goregaon East, Mumbai
                  <br />
                  400063.
                </p>
              </div>

              {/* PHONE */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <span className="text-[18px] shrink-0">
                  ♧
                </span>

                <span className="whitespace-nowrap">
                  Contact No: 022-62517000.
                </span>
              </div>
            </div>
          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}
        <div
          className="
            w-full
            h-px
            bg-white/10
            mt-8
            sm:mt-9
            lg:mt-8
          "
        />


        {/* =====================================================
            SECOND ROW
            DISCLAIMER
            THIS IS OUTSIDE FIRST ROW GRID
        ===================================================== */}
        <div
          className="
            w-full
            pt-7
            sm:pt-8
            md:pt-9
            lg:pt-8
            pb-5
          "
        >
          <h3
            className="
              m-0
              text-white
              text-[10px]
              sm:text-[11px]
              md:text-[12px]
              lg:text-[14px]
              font-normal
            "
          >
            DISCLAIMER
          </h3>

          <div
            className="
              w-[19px]
              lg:w-[30px]
              h-[2px]
              bg-white
              mt-2
            "
          />

          <p
            className="
              w-full
              mt-4
              m-0
              text-white
              text-[11px]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
              leading-[17px]
              sm:leading-[18px]
              md:leading-[19px]
              lg:leading-[20px]
              font-normal
            "
          >
            The information contained in this document has been prepared on
            the basis of internal data, publicly available information,
            market sources, and other information believed to be reliable.
            However, no representation or warranty, express or implied, is
            made as to the accuracy, completeness, or fairness of the
            information contained herein. The information provided is for
            general informational purposes only and does not constitute
            investment, legal, tax, accounting, or other professional advice.
          </p>

          <p
            className="
              w-full
              mt-4
              text-white
              opacity-60
              text-[11px]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
              leading-[17px]
              sm:leading-[18px]
              md:leading-[19px]
              lg:leading-[20px]
              font-normal
            "
          >
            This document is intended solely for discussion and information
            purposes and should not be construed as an offer, invitation,
            solicitation, recommendation, or advice to buy or sell any
            security or investment product.
          </p>

          <button
            type="button"
            className="
              mt-4
              h-[32px]
              sm:h-[34px]
              md:h-[36px]
              px-3
              sm:px-4
              rounded-[3px]
              border
              border-white
              bg-transparent
              text-white
              text-[9px]
              sm:text-[10px]
              md:text-[11px]
              flex
              items-center
              justify-center
              gap-2
              hover:bg-white
              hover:text-[#41472D]
              transition-colors
            "
          >
            <span>
              Read Full Disclaimer
            </span>

            <span>
              ⌄
            </span>
          </button>
        </div>


        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}
        <div
          className="
            w-full
            h-px
            bg-white/10
          "
        />


        {/* =====================================================
            THIRD ROW
            COPYRIGHT + LINKS
        ===================================================== */}
        <div
          className="
            w-full
            pt-4
            sm:pt-5
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-3
          "
        >
          {/* COPYRIGHT */}
          <div
            className="
              shrink-0
              text-white
              text-[9px]
              sm:text-[10px]
              leading-[15px]
            "
          >
            <p className="m-0">
              © 2026 Anand Rathi Asset Management.
            </p>

            <p className="m-0">
              All Rights Reserved.
            </p>
          </div>

          {/* BOTTOM LINKS */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-start
              md:justify-end
              gap-x-2
              sm:gap-x-3
              gap-y-1
              text-white
              text-[8px]
              sm:text-[9px]
              md:text-[10px]
              lg:text-[11px]
            "
          >
            <a
              href="#"
              className="text-white no-underline hover:opacity-70 whitespace-nowrap"
            >
              Privacy Policy
            </a>

            <span className="opacity-50">|</span>

            <a
              href="#"
              className="text-white no-underline hover:opacity-70 whitespace-nowrap"
            >
              Terms of Use
            </a>

            <span className="opacity-50">|</span>

            <a
              href="#"
              className="text-white no-underline hover:opacity-70 whitespace-nowrap"
            >
              Cookie Policy
            </a>

            <span className="opacity-50">|</span>

            <a
              href="#"
              className="text-white no-underline hover:opacity-70 whitespace-nowrap"
            >
              SEBI Registered
            </a>

            <span className="opacity-50">|</span>

            <a
              href="#"
              className="text-white no-underline hover:opacity-70 whitespace-nowrap"
            >
              AIF Registration No. XXXXX
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

