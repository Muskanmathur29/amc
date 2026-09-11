interface BlogSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function BlogSection({ title, children }: BlogSectionProps) {
  return (
    <section className="w-full">
      {/* <h2 className="font-['Abhaya_Libre'] text-[17px] leading-[24px] font-semibold text-[#2E2E2C] sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px]">
        {title}
      </h2> */}
      <h2 className="font-['Abhaya_Libre'] text-[22px] leading-[30px] font-semibold tracking-normal text-[#1A1A10] sm:text-[24px] sm:leading-[32px] md:text-[26px] md:leading-[34px]">
          {title}
      </h2>

      {/* Bronze line */}
      <div className="mt-2 h-[2px] w-[28px] bg-[#B07636]" />

      <div className="mt-3">{children}</div>
    </section>
  );
}
