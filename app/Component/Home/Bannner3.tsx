


import img1 from "../../assests/banner31.svg";
import img2 from "../../assests/banner32.svg";
import img3 from "../../assests/banner33.svg";
import Image from "next/image";

export default function Bannner3() {
  return (
    <section className="w-full overflow-hidden bg-[#FCF3E4]">
      
      {/* MAIN SECTION */}
      <div
        className="
          w-full
          min-h-[500px]
          py-[56px]

          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20

          flex
          flex-col
          lg:flex-row

          gap-8
          xl:gap-[40px]

          items-center

          bg-[#FCF3E4]
          shadow-[inset_0_4px_4px_0_#00000040,inset_0_-4px_4px_0_#00000040]
        "
      >

        {/* CONTENT CONTAINER */}
        <div
          className="
            w-full
            max-w-[1440px]
            mx-auto

            flex
            flex-col
            lg:flex-row

            items-center
            justify-between

            gap-8
            xl:gap-10

            min-w-0
          "
        >

          {/* ================= LEFT ================= */}
          <div
            className="
              w-full
              lg:flex-1
              lg:min-w-0

              flex
              flex-col
              gap-[7px]

              lg:max-w-[430px]
            "
          >

            {/* HEADING */}
            <div className="w-full">
              <h2
                className="
                  w-full

                  font-['Abhaya_Libre']
                  font-bold

                  text-[32px]
                  md:text-[42px]
                  lg:text-[48px]
                  xl:text-[52px]

                  leading-[30px]
                  md:leading-[40px]
                  lg:leading-[55px]
                  xl:leading-[58.76px]

                  tracking-[-0.52px]
                  text-[#1A1A10]
                "
              >
                Three Decades. One Discipline.
              </h2>
            </div>


            {/* DESCRIPTION */}
            <div
              className="
                w-full
                pt-6
              "
            >
              <p
                className="
                  w-full

                  font-['Abhaya_Libre']
                  font-normal

                  text-[16px]
                  md:text-[18px]
                  lg:text-[20px]
                  xl:text-[23px]

                  leading-[20px]
                  lg:leading-[26px]
                  xl:leading-[28px]

                  text-[#46483D]
                "
              >
                Three decades of disciplined growth have transformed the
                Anand Rathi Group into a diversified financial services
                institution, serving investors across India through
                research-led expertise.
              </p>
            </div>

          </div>


          {/* ================= CARDS ================= */}
          <div
            className="
              w-full

              lg:flex-1
              lg:min-w-0

              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3

              gap-[15px]
              lg:gap-[20px]
              xl:gap-[23px]

              min-w-0
            "
          >

            {/* CARD 1 */}
            <div
              className="
                w-full
                min-w-0
                overflow-hidden
                rounded-[19px]
                shadow-[0px_4px_4px_0px_#00000040]
              "
            >
              <Image
                src=  "/assests/banner31.svg"
                width  = {100} 
                height  = {100}
                alt="Anand Rathi Group founded"
                className="w-full h-auto block"
              />

              <div
                className="
                  w-full
                  min-h-[158px]

                  px-5
                  py-4

                  bg-[#F7F3EA]
                  overflow-hidden
                "
              >
                <div className="flex flex-col items-center lg:items-start">
                  <p
                    className="
                      font-['Abhaya_Libre']
                      font-bold
                      text-[38px]
                      leading-[45px]
                      text-[#B07636]
                    "
                  >
                    1994
                  </p>

                  <div className="w-[30px] border border-[#B07636]" />
                </div>

                <p
                  className="
                    mt-2
                    w-full
                    font-['Abhaya_Libre']
                    text-[15px]
                    leading-[20px]
                    tracking-[-0.38px]
                    text-[#1A1A10]
                    text-center
                    lg:text-left
                  "
                >
                  Anand Rathi Group
                  <br />
                  Founded
                </p>
              </div>
            </div>


            {/* CARD 2 */}
            <div
              className="
                w-full
                min-w-0
                overflow-hidden
                rounded-[19px]
                shadow-[0px_4px_4px_0px_#00000040]
              "
            >
              <Image
                src=  "/assests/banner32.svg"  
                width  = {100} 
                height  = {100}
                alt="Institutional equity professionals"
                className="w-full h-auto block"
              />

              <div
                className="
                  w-full
                  min-h-[158px]

                  px-5
                  py-4

                  bg-[#F7F3EA]
                  overflow-hidden
                "
              >
                <div className="flex flex-col items-center lg:items-start">
                  <p
                    className="
                      font-['Abhaya_Libre']
                      font-bold
                      text-[38px]
                      leading-[45px]
                      text-[#B07636]
                    "
                  >
                    100+
                  </p>

                  <div className="w-[30px] border border-[#B07636]" />
                </div>

                <p
                  className="
                    mt-2
                    w-full
                    font-['Abhaya_Libre']
                    text-[15px]
                    leading-[20px]
                    tracking-[-0.38px]
                    text-[#1A1A10]
                    text-center
                    lg:text-left
                  "
                >
                  Institutional equity
                  <br />
                  professionals
                </p>
              </div>
            </div>


            {/* CARD 3 */}
            <div
              className="
                w-full
                min-w-0
                overflow-hidden
                rounded-[19px]
                shadow-[0px_4px_4px_0px_#00000040]
              "
            >
              <Image
                src="/assests/banner33.svg"  
                 width  = {100} 
                 height  = {100}
                alt="Companies under active research coverage"
                className="w-full h-auto block"
              />

              <div
                className="
                  w-full
                  min-h-[158px]

                  px-5
                  py-4

                  bg-[#F7F3EA]
                  overflow-hidden
                "
              >
                <div className="flex flex-col items-center lg:items-start">
                  <p
                    className="
                      font-['Abhaya_Libre']
                      font-bold
                      text-[38px]
                      leading-[45px]
                      text-[#B07636]
                    "
                  >
                    200+
                  </p>

                  <div className="w-[30px] border border-[#B07636]" />
                </div>

                <p
                  className="
                    mt-2
                    w-full
                    font-['Abhaya_Libre']
                    text-[15px]
                    leading-[20px]
                    tracking-[-0.38px]
                    text-[#1A1A10]
                    text-center
                    lg:text-left
                  "
                >
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






