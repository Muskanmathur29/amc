

import Image from "next/image";
import img from "../../assests/FlaskArchetecture.svg";  
import img2 from "../../assests/BLOCKS.svg" 
import img3 from  "../../assests/CHESS.svg"
import playbutton from "../../assests/Button-Playvideo.png";

export default function Bannner7() {
  const cards = [
    {
      title:"What is a Category III AIF? How is it different from Mutual Funds?",
      image: "/assests/FlaskArchetecture.svg",
      text : "Neeraj Gaur, Head AIF • Mar 2025" 

    },
    {
      title: "Why invest directly in stocks when you can invest through PMS?",
      image: "/assests/CHESS.svg",
       text : "Mayur Shah, Fund Manager • Feb 2025" 
    },
    {
      title: "Long/Short Strategies Explained: HowAIFs generate returns in any market",
      image: "/assests/CHESS.svg", 
      text  : "Neeraj Gaur, Head AIF • Jan 2025"
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#FCF3E4]
        shadow-[inset_0_4px_4px_0_#00000040,inset_0_-4px_4px_0_#00000040]
      "
    >
      {/* Main Container */}
      <div
        className="
          w-full
          max-w-[1240px]
          mx-auto
          px-5 sm:px-6 md:px-8 lg:px-8 xl:px-0
          py-[56px]
        "
      >
        {/* ================= HEADER ================= */}
        <div className="w-full flex flex-col items-center text-center">
          
          {/* Heading */}
          <p
            className="
              w-full
              max-w-[777px]
              font-['Abhaya_Libre']
              font-semibold
              text-[36px]
              sm:text-[42px]
              md:text-[48px]
              lg:text-[60px]
              leading-[42px]
              sm:leading-[48px]
              md:leading-[54px]
              lg:leading-[60px]
              text-[#86693A]
            "
          >
            Learn Before You Invest Deeper
          </p>

          {/* Sub Heading */}
          <p
            className="
              w-full
              max-w-[1100px]
              mt-[14px]
              font-['Abhaya_Libre']
              font-bold
              text-[18px]
              sm:text-[20px]
              md:text-[22px]
              lg:text-[24px]
              leading-[26px]
              sm:leading-[28px]
              lg:leading-[30px]
              text-[#86693A]
            "
          >
            From AIF fundamentals to PMS nuances – our fund managers simplify
            complex concepts for the informed investor.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            w-full
            mt-[56px]
            grid
            grid-cols-1
            md:grid-cols-1
            lg:grid-cols-3
            gap-[24px]
            justify-items-center
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                w-full
                max-w-[380px]
                rounded-[12px]
                overflow-hidden
                border
                border-[#C7C8BC]
                bg-[#86693A]
                shadow-[0_2px_4px_-1px_#00000008,0_4px_6px_-1px_#0000000D]
              "
            >
              {/* ================= IMAGE ================= */}
              <div
                className="
                  relative
                  w-full
                  h-[214px]
                  overflow-hidden
                "
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover grayscale"
                />

                {/* PLAY BUTTON */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >
                  <button
                    type="button"
                    className="
                      w-[48px]
                      h-[48px]
                      p-0
                      m-0
                      bg-transparent
                      border-0
                      shadow-none
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Image
                      src= "/assests/Button-Playvideo.png"
                      alt="Play video"
                      width={48}
                      height={48}
                      className="
                        w-[48px]
                        h-[48px]
                        object-contain
                      "
                    />
                  </button>
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div
                className="
                  w-full
                  min-h-[109px]
                  p-[16px]
                  flex
                  flex-col
                  gap-[8px]
                "
              >
                {/* Title */}
                <p
                  className="
                    w-full
                    font-['Abhaya_Libre']
                    font-bold
                    text-[22px]
                    leading-[26px]
                    text-white
                  "
                >
                  {card.title}
                </p>

                {/* Description */}
                <p
                  className="
                    w-full
                    font-['Abhaya_Libre']
                    font-normal
                    text-[15px]
                    leading-[16px]
                    text-white
                    opacity-80
                  "
                >
                    {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}