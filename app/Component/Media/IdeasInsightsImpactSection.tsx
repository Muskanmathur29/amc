export default function HeroSection() {
  return (
    <section
      className="relative min-h-[550px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assests/Media/Media-Image.png')",
      }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#182512]/75" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[550px] items-center">
        <div className="ml-[7%] max-w-[600px]">
          <h1 className="font-serif text-5xl text-white">
            Ideas. Insights. Impact.
          </h1>


          <p
  className="mt-6 h-auto w-full max-w-[475px] text-[20px] font-bold leading-[28px] tracking-[0px] text-[#D1D5DB]"
  style={{ fontFamily: "Abhaya Libre" }}
>
  Stay informed with our latest market perspectives, expert
  interviews, and thought leadership across platforms.
</p>


          <div className="mt-8 h-[4px] w-[45px] bg-[#C49A45]" />
        </div>
      </div>
    </section>
  );
}
