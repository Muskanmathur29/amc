import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav className="flex w-full items-center gap-3">
      {/* Blogs */}
      <Link
        href="/Blog"
        className="font-['Inter'] text-[12.5px] leading-[16px] font-normal text-[#8A8A8A] underline sm:text-[13px] sm:leading-[18px] md:text-[14px] md:leading-[20px]"
      >
        Blogs
      </Link>

      {/* Chevron */}
      <span className="h-[9px] w-[9px] rotate-[-45deg] border-r-[1.5px] border-b-[1.5px] border-[#B07636]" />

      {/* Current page */}
      <span className="font-['Inter'] text-[12.5px] leading-[16px] font-normal text-[#2E2E2C] sm:text-[13px] sm:leading-[18px] md:text-[14px] md:leading-[20px]">
        How to Build a Diversified Portfolio
      </span>
    </nav>
  );
}
