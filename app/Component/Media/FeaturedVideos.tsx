const videos = [
  {
    image: "/assests/Media/Video Thumbnail - 1.png",
    duration: "12:34",
    title: "India's Growth Engine: Where Opportunity Meets Discipline",
    name: "Mr. Nilesh Shah",
    designation: "Managing Director",
    date: "May 20, 2025",
  },
  {
    image: "/assests/Media/Video Thumbnail - 2.png",
    duration: "10:21",
    title: "Decoding Markets: Volatility, Valuations & the Road Ahead",
    name: "Mr. Krunal Shah",
    designation: "Chief Investment Officer",
    date: "May 06, 2025",
  },
  {
    image: "/assests/Media/Video Thumbnail - 3.png",
    duration: "08:47",
    title: "The Case for Quality Compounding in a Dynamic Economy",
    name: "Mr. Dhaval Shah",
    designation: "Executive Director",
    date: "Apr 21, 2025",
  },
];


export default function FeaturedVideos() {
  return (
    <section className="bg-[#FFFCF5] px-6 py-16 md:px-12 lg:px-[7.5%] lg:py-[72px]">
      {/* Header */}
      <div className="mb-9 flex items-start justify-between">
        <div>
          <h2
            className="text-[28px] font-bold leading-[36px] text-[#172033]"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            Featured Videos
          </h2>

          <div className="mt-3 h-[2px] w-[60px] bg-[#C58B35]" />
        </div>

        {/* View All Videos */}
        <button
          className="hidden h-[37px] items-center gap-2 border border-[#C58B35] px-4 text-[14px] text-[#A87427] md:flex"
          style={{ fontFamily: "Abhaya Libre" }}
        >
          View all videos
          <span className="text-[18px]">›</span>
        </button>
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.title}
            className="overflow-hidden rounded-[8px] border border-[#C58B35] bg-white"
          >
            {/* Image */}
            <div className="relative aspect-[1.77/1] overflow-hidden">
              <img
                src={video.image}
                alt={video.title}
                className="h-full w-full object-cover"
              />

              {/* Play Button */}
              <button
                aria-label={`Play ${video.title}`}
                className="absolute left-1/2 top-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/20"
              >
                <span className="ml-1 text-[22px] text-white">▶</span>
              </button>

              {/* Duration */}
              <span className="absolute bottom-0 right-0 bg-black/80 px-2 py-1 text-[11px] font-bold text-white">
                {video.duration}
              </span>
            </div>

            {/* Card Content */}
            <div className="px-5 pb-5 pt-5">
              <h3
                className="min-h-[60px] text-[18px] font-bold leading-[24px] text-[#172033]"
                style={{ fontFamily: "Abhaya Libre" }}
              >
                {video.title}
              </h3>

              <div className="mt-5 flex items-end justify-between gap-4">
                {/* Speaker */}
                <div>
                  <p
                    className="text-[13px] font-bold leading-[18px] text-[#B47A28]"
                    style={{ fontFamily: "Abhaya Libre" }}
                  >
                    {video.name}
                  </p>

                  <p
                    className="text-[12px] leading-[17px] text-[#6B7280]"
                    style={{ fontFamily: "Abhaya Libre" }}
                  >
                    {video.designation}
                  </p>
                </div>

                {/* Date */}
                <p
                  className="whitespace-nowrap text-[12px] text-[#6B7280]"
                  style={{ fontFamily: "Abhaya Libre" }}
                >
                  {video.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="mt-7 flex justify-center md:hidden">
        <button
          className="flex items-center gap-2 border border-[#C58B35] px-5 py-2 text-[14px] text-[#A87427]"
          style={{ fontFamily: "Abhaya Libre" }}
        >
          View all videos
          <span className="text-[18px]">›</span>
        </button>
      </div>
    </section>
  );
}
