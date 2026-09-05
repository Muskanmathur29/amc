import AboutusHeader from "./AboutusHeader";

let data = [
  {
    year: "1994",
    description:
      "A single research desk opens its doors as India begins its economic liberalization.",
  },

  {
    year: "2000s",
    description:
      "Institutional broking and wealth management franchise scales across India's major cities.",
  },
  {
    year: "2010s",
    description:
      "Structured wealth and alternative investment advisory launched for HNI & Ultra-HNI clients.",
  },
  {
    year: "2010s",
    description:
      "Structured wealth and alternative investment advisory launched for HNI & Ultra-HNI clients.",
  },

  {
    year: "2020s",
    description:
      "Two Group entities go public, marking three decades of disciplined, research-led growth.",
  },

  {
    year: "2024s",
    description:
      "Anand Rathi Asset Management launches a dedicated Alternative Investment Fund platform.",
  },
  {
    year: "Today",
    description:
      "100+ institutional professionals covering 200+ companies, single-mindedly focused on structural alpha.",
  },
];
export default function Banner3() {
  return (
    <div>
      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-[80px] lg:py-[80px]">
        {/* Content */}

        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[70px] px-5 sm:px-6 md:px-8 lg:gap-[0px] lg:px-[32px]">
          <AboutusHeader
            eyebrow="Our Foundation"
            title="Built by Visionaries. Trusted by Thousands."
            description="The Anand Rathi Group was founded in 1994, on the cusp of India's economic liberalization — a 30-year journey from one research desk to a pan-India financial powerhouse."
          />

          <div className="mx-auto w-full max-w-[1116px] pt-8 sm:pt-9 md:pt-10 lg:pt-[48px]">
            <div className="lg-flex-row mx-auto min-h-[202px] w-full max-w-[960px] px-4 pt-2.5 sm:px-5 md:px-6 lg:px-0">
              {/* <div className="flex min-h-[192px] w-full max-w-[960px] flex-col items-center justify-center gap-2 lg:flex-row">
                {data.map((data) => (
                  <div className="flex min-h-[172px] w-full max-w-[154px] flex-col gap-[6px] pt-[40px] pr-[8px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px]">
                    <div className="relative w-full border-t border-dashed border-[#B07636] pb-[6px]">
                      <div className="absolute -top-[10px] left-0 h-[17px] w-[17px] rounded-full border-[3px] border-[#B07636] bg-white"></div>
                    </div>

                    <h3 className="font-abhaya w-full max-w-[145px] pt-[10px] text-[16px] leading-[19px] font-semibold text-[#576534] sm:text-[17px] sm:leading-[20px] md:text-[18px] md:leading-[21px] lg:text-[18px] lg:leading-[21px]">
                      {data.year}
                    </h3>

                    <p className="font-abhaya min-h-[81px] w-full max-w-[145px] text-[13px] leading-[20.15px] font-normal text-[#46483D] sm:text-[13px] sm:leading-[20.15px] md:text-[13px] md:leading-[20.15px] lg:text-[13px] lg:leading-[20.15px]">
                      {data.description}
                    </p>
                  </div>
                ))}
              </div> */}

              <div className="mx-auto w-full max-w-[960px] px-4 pt-2.5 sm:px-5 md:px-6 lg:px-0">
                <div className="relative flex w-full flex-col lg:flex-row">
                  {/* Continuous horizontal line */}
                  <div className="absolute top-[64px] right-0 left-0 hidden border-t border-dashed border-[#B07636] lg:block"></div>

                  {data.map((item, index) => (
                    <div
                      key={`${item.year}-${index}`}
                      className="relative flex w-full flex-col lg:w-1/7 lg:flex-1 lg:pt-[64px] lg:pr-[8px]"
                    >
                      {/* Dot */}
                      {index < data.length - 1 ? (
                        <div className="absolute top-[55px] left-0 hidden h-[17px] w-[17px] rounded-full border-[3px] border-[#B07636] bg-white lg:block"></div>
                      ) : (
                        <div className="absolute top-[55px] left-0 hidden h-[17px] w-[17px] rounded-full border-[3px] border-[#B07636] bg-[#B07636] lg:block"></div>
                      )}
                      {/* Mobile/tablet line */}
                      <div className="relative mb-4 border-t border-dashed border-[#B07636] lg:hidden">
                        <div className="absolute -top-[10px] left-0 h-[17px] w-[17px] rounded-full border-[3px] border-[#B07636] bg-white"></div>
                      </div>

                      {/* Year */}
                      <h3 className="font-abhaya mt-[0px] w-full pt-[10px] text-center text-[16px] leading-[19px] font-semibold text-[#576534] sm:text-[17px] sm:leading-[20px] md:text-[18px] md:leading-[21px] lg:mt-[20px] lg:pt-[10px] lg:text-start lg:text-[18px] lg:leading-[21px]">
                        {item.year}
                      </h3>

                      {/* Description */}
                      <p className="font-abhaya mx-auto w-full max-w-[145px] pt-[10px] text-[13px] leading-[20.15px] font-normal text-[#46483D] lg:text-start">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
