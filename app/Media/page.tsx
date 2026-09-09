import IdeasInsightsImpactSection from "../Component/Media/IdeasInsightsImpactSection";
import FeaturedVideos from "../Component/Media/FeaturedVideos";
import AllVideos from "../Component/Media/AllVideos";
import NeverMissInsight from "../Component/Media/NeverMissInsight";

export default function page() {
  return (
    <div>
      <IdeasInsightsImpactSection />
      <FeaturedVideos />
      <AllVideos />
      <NeverMissInsight />

    </div>
  );
}
