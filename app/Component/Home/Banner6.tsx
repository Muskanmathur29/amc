
import img1 from "../../assests/ARsir.png";
import img2 from "../../assests/Preadeepguptasir.png";
import Image from "next/image";

export default function Banner6() {
  return (
    <section
      className="
        w-full
        min-h-[560px]
        bg-white

        px-5
        sm:px-8
        md:px-10
        lg:px-12
        xl:px-[100px]

        py-[56px]
      "
    >
      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          w-full
          max-w-[1240px]
          mx-auto

          flex
          flex-col
          lg:flex-row

          items-center

          gap-10
          lg:gap-[48px]
        "
      >

        {/* ================= LEFT SECTION ================= */}
        <div
          className="
            w-full
            lg:flex-1
            lg:min-w-0
            lg:max-w-[596px]

            flex
            flex-col
            justify-center

            gap-[8px]

            text-center
            lg:text-left
          "
        >

          {/* SMALL TITLE */}
          <p
            className="
              w-full

              font-['Abhaya_Libre']
              font-bold

              text-[16px]
              sm:text-[17px]
              md:text-[18px]

              leading-[20px]
              tracking-[1.4px]

              uppercase

              text-[#686F7C]
            "
          >
            OUR FOUNDATION
          </p>


          {/* MAIN HEADING */}
          <div className="w-full mt-[8px]">
            <p
              className="
                w-full

                font-['Abhaya_Libre']
                font-normal

                text-[32px]
                sm:text-[36px]
                md:text-[40px]
                lg:text-[46px]

                leading-[1.04]

                tracking-[0px]

                text-[#1A1A10]
              "
            >
              Built by Visionaries.
              <br />
              Trusted by Thousands.
            </p>
          </div>


          {/* DESCRIPTION */}
          <div
            className="
              w-full
              mt-[8px]
              pt-[16px]
            "
          >
            <p
              className="
                w-full
                max-w-[587px]

                font-['Abhaya_Libre']
                font-semibold

                text-[18px]
                sm:text-[20px]
                md:text-[22px]
                lg:text-[24px]

                leading-[28px]

                tracking-[0%]

                text-[#686F7C]
              "
            >
              The Anand Rathi Group was founded in 1994, on the cusp of
              India's economic liberalization. A 30-year journey from one
              research desk to a pan-India financial powerhouse with 2
              listed companies.
            </p>
          </div>

        </div>


        {/* ================= RIGHT SECTION ================= */}
        <div
          className="
            w-full
            lg:flex-1
            lg:min-w-0
            lg:max-w-[596px]

            flex
            flex-col
            sm:flex-row

            gap-[20px]

            justify-center
            lg:justify-start

            items-start
          "
        >

          {/* ================= PROFILE 1 ================= */}
          <div
            className="
              w-full
              sm:w-[calc(50%-10px)]
              lg:w-[calc(50%-10px)]

              min-w-0
              shrink
            "
          >

            {/* IMAGE */}
            <div
              className="
                w-full
                aspect-[288/393]

                overflow-hidden
              "
            >
              <Image
                src={"/assests/ARsir.png"}
                alt="Anand Rathi"
                width={288}
                height={393}
                className="
                  w-full
                  h-full
                  object-cover
                  grayscale
                "
              />
            </div>


            {/* NAME */}
            <div className="w-full pt-[16px]">
              <p
                className="
                  w-full

                  font-['Abhaya_Libre']
                  font-normal

                  text-[24px]
                  sm:text-[26px]
                  lg:text-[28px]

                  leading-[34px]

                  text-[#1A1A10]
                "
              >
                Anand Rathi
              </p>
            </div>


            {/* DESIGNATION */}
            <div className="w-full">
              <p
                className="
                  w-full

                  font-['Abhaya_Libre']
                  font-semibold

                  text-[18px]
                  sm:text-[19px]
                  lg:text-[20px]

                  leading-[24px]

                  text-[#1A1A10]
                "
              >
                Founder &amp; Chairman
              </p>
            </div>

          </div>


          {/* ================= PROFILE 2 ================= */}
          <div
            className="
              w-full
              sm:w-[calc(50%-10px)]
              lg:w-[calc(50%-10px)]

              min-w-0
              shrink
            "
          >

            {/* IMAGE */}
            <div
              className="
                w-full
                aspect-[288/393]

                overflow-hidden
              "
            >
              <Image
                src={"/assests/Preadeepguptasir.png"}
                alt="Mr Pradeep Gupta"
                width={288}
                height={393}
                className="
                  w-full
                  h-full
                  object-cover
                  grayscale
                "
              />
            </div>


            {/* NAME */}
            <div className="w-full pt-[16px]">
              <p
                className="
                  w-full

                  font-['Abhaya_Libre']
                  font-normal

                  text-[24px]
                  sm:text-[26px]
                  lg:text-[28px]

                  leading-[34px]

                  text-[#1A1A10]
                "
              >
                Mr Pradeep Gupta
              </p>
            </div>


            {/* DESIGNATION */}
            <div className="w-full">
              <p
                className="
                  w-full

                  font-['Abhaya_Libre']
                  font-semibold

                  text-[18px]
                  sm:text-[19px]
                  lg:text-[20px]

                  leading-[24px]

                  text-[#1A1A10]
                "
              >
                Chairman and Managing Director
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}