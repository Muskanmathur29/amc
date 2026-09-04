import Header from "./Component/common/Header";
import Banner1 from "./Component/Home/Banner1";
import Banner2 from "./Component/Home/Banner2";
import Bannner3 from "./Component/Home/Bannner3";
import Banner4 from "./Component/Home/Banner4";
import Banner5 from "./Component/Home/Banner5";
import Banner51 from "./Component/Home/Banner51";
import Banner6 from "./Component/Home/Banner6";
import Bannner7 from "./Component/Home/Bannner7";
import FAQSection from "./Component/Home/Banner8";
import Footer from "./Component/common/Footer";
import Banner81 from "./Component/Home/Banner81";

export default function page() {
  return (
    <div>
      <Banner1 />
      <Banner2 />
      <Bannner3 />
      <Banner4 />
      {/* <Banner5/>   */}
      <Banner51 />
      <Banner6 />
      <Bannner7 />
      <FAQSection />
      {/* <Banner81 /> */}
    </div>
  );
}
