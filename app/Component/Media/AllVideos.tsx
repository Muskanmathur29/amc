import { ChevronDown, ArrowUpWideNarrow } from "lucide-react";

const videos = [
  {
    image: "/assests/Media/All-Videos-Image-1.png",
    duration: "12:34",
    title: "India's Growth Engine: Where Opportunity Meets Discipline",
    name: "Mr. Nilesh Shah",
    date: "May 20, 2025",
  },
  {
    image: "/assests/Media/All-Videos-Image-2.png",
    duration: "10:21",
    title: "Decoding Markets: Volatility, Valuations & the Road Ahead",
    name: "Mr. Krunal Shah",
    date: "May 06, 2025",
  },
  {
    image: "/assests/Media/All-Videos-Image-3.png",
    duration: "08:47",
    title: "The Case for Quality Compounding in a Dynamic Economy",
    name: "Mr. Dhaval Shah",
    date: "Apr 21, 2025",
  },
  {
    image: "/assests/Media/All-Videos-Image-4.png",
    duration: "09:15",
    title: "Small & Midcaps: The Next Leg of India's Growth Story",
    name: "Mr. Pranav Gokhale",
    date: "Apr 08, 2025",
  },
  {
    image: "/assests/Media/All-Videos-Image-5.png",
    duration: "07:59",
    title: "Global Uncertainty, India's Resilience: A Contrarian View",
    name: "Mr. Karthik Jogi",
    date: "Mar 25, 2025",
  },
  {
    image: "/assests/Media/All-Videos-Image-6.png",
    duration: "12:34",
    title: "Fixed Income Outlook: Rates, Inflation & Opportunities",
    name: "Mr. Aneesh Padda",
    date: "Mar 10, 2025",
  },
];

export default function AllVideos() {
  return (
    <section className="bg-[#FFF7E8] px-6 py-12 md:px-12 lg:px-[7.5%] lg:py-[70px]">

      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

        {/* Heading */}
        <div>
          <h2
            className="text-[28px] font-bold leading-[36px] text-[#172033]"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            All Videos
          </h2>

          <div className="mt-3 h-[2px] w-[60px] bg-[#B77A2A]" />
        </div>

        {/* Filters */}
<div className="flex flex-wrap gap-4">
  {/* All Topics */}
  <button className="flex h-[36px] min-w-[140px] items-center justify-between border border-[#D9DEE5] bg-white px-3">
    <span
      className="text-[14px] font-normal leading-[20px] tracking-[0px] text-[#111827]"
      style={{ fontFamily: "Liberation Sans" }}
    >
      All Topics
    </span>

    <ChevronDown className="h-4 w-4 text-[#111827]" />
  </button>

  {/* All Speakers */}
  <button className="flex h-[36px] min-w-[140px] items-center justify-between border border-[#D9DEE5] bg-white px-3">
    <span
      className="text-[14px] font-normal leading-[20px] tracking-[0px] text-[#111827]"
      style={{ fontFamily: "Liberation Sans" }}
    >
      All Speakers
    </span>

    <ChevronDown className="h-4 w-4 text-[#111827]" />
  </button>

  {/* Latest First */}
  <button className="flex h-[36px] min-w-[140px] items-center justify-between border border-[#D9DEE5] bg-white px-3">
    <span
      className="text-[14px] font-normal leading-[20px] tracking-[0px] text-[#111827]"
      style={{ fontFamily: "Liberation Sans" }}
    >
      Latest First
    </span>

    <ArrowUpWideNarrow className="h-4 w-4 text-[#111827]" />

  </button>
</div>

      </div>

      {/* Videos Grid */}
      <div className="mt-11 grid grid-cols-1 gap-x-7 gap-y-8 md:grid-cols-2 lg:grid-cols-3">

        {videos.map((video) => (
          <div
            key={video.title}
            className="overflow-hidden rounded-[7px] border border-[#C58B35] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          >

            {/* Video Image */}
            <div className="relative aspect-[1.77/1] overflow-hidden">

              <img
                src={video.image}
                alt={video.title}
                className="h-full w-full object-cover"
              />

              {/* Play Button */}
              <button
                aria-label={`Play ${video.title}`}
                className="absolute left-1/2 top-1/2 flex h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/10"
              >
                <span className="ml-1 text-[18px] text-white">
                  ▶
                </span>
              </button>

              {/* Duration */}
              <span className="absolute bottom-[7px] right-[7px] bg-black px-2 py-1 text-[10px] text-white">
                {video.duration}
              </span>

            </div>

            {/* Card Content */}
            <div className="px-4 pb-4 pt-4">

              <h3
                className="min-h-[48px] text-[16px] font-bold leading-[21px] text-[#172033]"
                style={{ fontFamily: "Abhaya Libre" }}
              >
                {video.title}
              </h3>

              <div className="mt-4 flex items-center justify-between">

                <p
                  className="text-[14px] font-bold text-[#B77A2A]"
                  style={{ fontFamily: "Abhaya Libre" }}
                >
                  {video.name}
                </p>


                <p
  className="flex h-[17px] w-[66.66px] items-center whitespace-nowrap text-[11px] font-normal leading-[16.5px] tracking-[0px] text-[#6B7280]"
  style={{ fontFamily: "Liberation Sans" }}
>
  {video.date}
</p>


              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Load More */}
      <div className="mt-11 flex justify-center">
        <button
          className="flex h-[42px] items-center gap-2 rounded-[3px] bg-[#B77A2A] px-8 text-[14px] font-bold text-white"
          style={{ fontFamily: "Abhaya Libre" }}
        >
          <span>Load More Videos</span>
          <span className="text-[17px]">↓</span>
        </button>
      </div>

    </section>
  );
}
