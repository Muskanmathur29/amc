
import pic1 from "../../assests/Neeraj Gaurh.svg";
import pic2 from "../../assests/Kunal Talreja.svg";
import Image from "next/image";

export default function Banner4() {
  return (
    <section
      className="
        w-full
        h-auto
        overflow-x-hidden

        pt-[40px]
        pb-[40px]
        px-5

        sm:px-8
        md:px-12
        lg:px-16
        xl:px-20

        lg:pt-[64px]

        bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF3E2_100%)]
        shadow-[inset_0px_4px_4px_0px_#00000040]
      "
    >

      {/* MAIN CONTAINER */}
      <div
        className="
          w-full
          max-w-[1376px]
          mx-auto

          flex
          flex-col

          gap-[40px]
          lg:gap-[56px]

          min-w-0
        "
      >

        {/* ================= HEADER ================= */}
        <div
          className="
            w-full
            flex
            flex-col
            items-center

            min-w-0
          "
        >

          {/* TOP LABEL */}
          <div
            className="
              w-full
              flex
              justify-center
              items-center

              gap-[6px]
              sm:gap-[8px]
              lg:gap-[16px]

              min-w-0
            "
          >

            <div className="relative w-[32px] sm:w-[48px] h-[1px] bg-[#576534] shrink-0">
              <div
                className="
                  absolute
                  top-1/2
                  left-0
                  w-[6px]
                  h-[6px]
                  rounded-full
                  bg-[#3C5430]
                  -translate-x-1/2
                  -translate-y-1/2
                "
              />
            </div>


            <p
              className="
                w-auto
                max-w-full

                font-['Abhaya_Libre']
                font-bold

                text-[16px]
                sm:text-[18px]
                md:text-[20px]

                leading-[20px]
                tracking-[1.5px]
                sm:tracking-[2.1px]

                text-center
                uppercase
                text-[#41472D]
              "
            >
              LED BY INSTITUTIONAL EXPERTISE
            </p>


            <div className="relative w-[32px] sm:w-[48px] h-[1px] bg-[#576534] shrink-0">
              <div
                className="
                  absolute
                  top-1/2
                  right-0
                  w-[6px]
                  h-[6px]
                  rounded-full
                  bg-[#3C5430]
                  translate-x-1/2
                  -translate-y-1/2
                "
              />
            </div>

          </div>


          {/* TITLE */}
          <div className="w-full mt-6 flex justify-center">
            <h2
              className="
                w-full
                max-w-[720px]

                font-['Abhaya_Libre']
                font-semibold

                text-[32px]
                sm:text-[40px]
                md:text-[48px]
                lg:text-[56px]
                xl:text-[60px]

                leading-[1.1]

                text-center
                text-[#5D663B]
              "
            >
              The Minds Behind the Money
            </h2>
          </div>


          {/* QUOTE */}
          <div
            className="
              w-full
              mt-6

              flex
              items-start
              justify-center

              gap-2
              sm:gap-4

              min-w-0
            "
          >

            <span
              className="
                shrink-0
                font-['Abhaya_Libre']
                text-[45px]
                sm:text-[55px]
                lg:text-[60px]

                leading-none

                text-[#76786B]
                opacity-50
              "
            >
              “
            </span>


            <p
              className="
                w-full
                max-w-[1100px]

                font-['Italianno']
                font-normal

                text-[26px]
                sm:text-[32px]
                md:text-[38px]
                lg:text-[48px]

                leading-[1.2]

                text-center
                text-[#41472D]

                break-words
              "
            >
              True alpha isn't found by following the crowd it comes from
              rigorous research, strict risk discipline, and the conviction
              to stay with an idea until the market catches up.
            </p>


            <span
              className="
                shrink-0
                font-['Abhaya_Libre']
                text-[45px]
                sm:text-[55px]
                lg:text-[60px]

                leading-none

                text-[#76786B]
                opacity-50
              "
            >
              ”
            </span>

          </div>

        </div>


        {/* ================= PEOPLE ================= */}
        <div
          className="
            w-full
            max-w-[1120px]
            mx-auto

            grid
            grid-cols-1
            md:grid-cols-2

            gap-5
            lg:gap-8

            min-w-0
          "
        >

          {/* ================= CARD 1 ================= */}
          <div
            className="
              w-full
              min-w-0

              flex
              flex-col
              sm:flex-row

              items-center
              sm:items-start

              gap-5
              lg:gap-8

              p-5
              lg:p-8

              rounded-[12px]

              bg-[#FAF8F5]
              shadow-[0px_4px_10px_0px_#0000002B]
            "
          >

            {/* IMAGE */}
            <div
              className="
                w-full
                sm:w-[112px]

                shrink-0

                flex
                justify-center
                items-start
              "
            >
              <Image
                src= "/assests/Neeraj Gaurh.svg"
                alt="Neeraj Gaurh" 
                 width = {112} 
                 height = {100}
                className="
                  w-[112px]
                  max-w-full
                  h-auto
                  object-contain
                "
              />
            </div>


            {/* CONTENT */}
            <div
              className="
                w-full
                min-w-0

                flex
                flex-col

                gap-[4px]

                text-center
                sm:text-left
              "
            >

              <p
                className="
                  w-full

                  font-['Abhaya_Libre_SemiBold']
                  font-semibold

                  text-[22px]
                  lg:text-[25px]

                  leading-[36px]

                  text-[#5D663B]
                "
              >
                Neeraj Gaurh
              </p>


              <p
                className="
                  w-full

                  font-['Abhaya_Libre']
                  font-semibold

                  text-[13px]
                  sm:text-[14px]

                  leading-[20px]
                  tracking-[0.35px]

                  uppercase
                  text-[#76786B]
                "
              >
                DIRECTOR & FUND MANAGER
              </p>


              <p
                className="
                  w-full
                  mt-1

                  font-['Abhaya_Libre']
                  font-normal

                  text-[13px]
                  sm:text-[14px]

                  leading-[20px]

                  text-[#5D663B]
                "
              >
                CFA • PGDM Finance • Ex-Franklin Templeton, Axis Securities
              </p>


              <p
                className="
                  w-full
                  mt-2

                  font-['Abhaya_Libre']
                  font-normal

                  text-[16px]
                  sm:text-[18px]

                  leading-[24px]

                  text-[#45483D]
                "
              >
                Over two decades in equity research and portfolio management
                scaled a flagship PMS mandate from ₹10 Cr to ₹540+ Cr in
                under two years.
              </p>

            </div>

          </div>


          {/* ================= CARD 2 ================= */}
          <div
            className="
              w-full
              min-w-0

              flex
              flex-col
              sm:flex-row

              items-center
              sm:items-start

              gap-5
              lg:gap-8

              p-5
              lg:p-8

              rounded-[12px]

              bg-[#FAF8F5]
              shadow-[0px_4px_10px_0px_#0000002B]
            "
          >

            {/* IMAGE */}
            <div
              className="
                w-full
                sm:w-[112px]

                shrink-0

                flex
                justify-center
                items-start
              "
            >
              <Image
                src= "/assests/Kunal Talreja.svg"
                alt="Kunal Talreja"
                   width  = {112} 
                   height  = {100}
                className="
                  w-[112px]
                  max-w-full
                  h-auto
                  object-contain
                "
              />
            </div>


            {/* CONTENT */}
            <div
              className="
                w-full
                min-w-0

                flex
                flex-col

                gap-[4px]

                text-center
                sm:text-left
              "
            >

              <p
                className="
                  w-full

                  font-['Abhaya_Libre_SemiBold']
                  font-semibold

                  text-[22px]
                  lg:text-[25px]

                  leading-[36px]

                  text-[#5D663B]
                "
              >
                Kunal Talreja
              </p>


              <p
                className="
                  w-full

                  font-['Abhaya_Libre']
                  font-semibold

                  text-[13px]
                  sm:text-[14px]

                  leading-[20px]
                  tracking-[0.35px]

                  uppercase
                  text-[#76786B]
                "
              >
                FUND MANAGER
              </p>


              <p
                className="
                  w-full
                  mt-1

                  font-['Abhaya_Libre']
                  font-normal

                  text-[13px]
                  sm:text-[14px]

                  leading-[20px]

                  text-[#5D663B]
                "
              >
                PGDM Finance • NISM-Certified AIF Manager
              </p>


              <p
                className="
                  w-full
                  mt-2

                  font-['Abhaya_Libre']
                  font-normal

                  text-[16px]
                  sm:text-[18px]

                  leading-[24px]

                  text-[#45483D]
                "
              >
                15+ years advising HNI and Ultra-HNI clients across Anand
                Rathi, Motilal Oswal, and Morgan Stanley Advantage Services.
              </p>

            </div>

          </div>

        </div> 
        
          <button className="w-[288px] h-[60px] px-8 py-4 gap-3 flex items-center justify-center
         text-center   rounded-md   bg-[#576534] shadow-[0_2px_4px_0_#00000040]  mx-auto relative" >
                   
                   <h2 className="w-full text-center
                     font-['Abhaya_Libre'] font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[26px]
                     md:text-[24px] md:leading-[28px] text-white">
                         Latest Market View  
                    </h2>  

  
                   {/* <p className="w-[18px]   text-[20px]  border-[1.5px] asbolute 
                    top-[8.25px] left-[3px]  text-white  ">   
                     
                    </p>  */}   

                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M1 4H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path  d="M13 1L17 4L13 7"  stroke="white" strokeWidth="1.5"  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>  
                        
          </button>
           
                           </div>

    </section>
  );
}

