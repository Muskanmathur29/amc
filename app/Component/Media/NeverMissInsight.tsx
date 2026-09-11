import { Bell } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function NeverMissInsight() {
  return (
    <section className="bg-[#FFF7E8] px-6 pb-12 md:px-12 lg:px-[7.5%] lg:pb-[70px]">
      <div className="relative overflow-hidden rounded-t-[16px] bg-[#526633] px-8 py-10 md:px-12 lg:px-[45px] lg:py-[48px]">

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          {/* Left Content */}
          <div className="flex items-center gap-6">

            {/* Bell Icon */}
            <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-[#C58B35]">
              <Bell
                className="h-7 w-7 text-[#C58B35]"
                strokeWidth={1.5}
              />
            </div>

            {/* Text */}
            <div>
              <h2
                className="text-[26px] font-bold leading-[34px] text-white md:text-[28px]"
                style={{ fontFamily: "Abhaya Libre" }}
              >
                Never Miss an Insight
              </h2>


              <p
  className="mt-2 flex h-[48px] w-[336.53px] items-center text-[16px] font-normal leading-[24px] tracking-[0px] text-[#9CA3AF]"
  style={{ fontFamily: "Liberation Sans" }}
>
  Subscribe to our YouTube channel for the latest market updates and expert views.
</p>


            </div>
          </div>


          {/* Subscribe Button */}
<button
  className="flex h-[45px] shrink-0 items-center gap-3 rounded-[5px] bg-[#B77A2A] px-7 text-[14px] font-bold text-white transition-opacity hover:opacity-90"
  style={{ fontFamily: "Abhaya Libre" }}
>


  <FaYoutube className="relative top-[0px] h-[20px] w-[26px]" />


  <span
  className="text-[16px] font-normal leading-[24px] tracking-[0px]"
  style={{ fontFamily: "Liberation Sans" }}
>
  Subscribe to our channel
</span>


  <span className="text-[18px]">→</span>
</button>


        </div>
      </div>
    </section>
  );
}
