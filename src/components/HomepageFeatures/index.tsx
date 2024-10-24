import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import PopularCourses from "./PopularCourses";
import FeaturedProjects from "./FeaturedProjects";
import InteractiveAIDemos from "./InteractiveAIDemos";
import CommunityEngagement from "./CommunityEngagement";
import BlogAndResources from "./BlogAndResources";
import AIEthicsAwareness from "./AIEthicsAwareness";
import NewsletterSubscription from "./NewsletterSubscription";

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PopularCourses />
      <FeaturedProjects />
      <InteractiveAIDemos />
      <CommunityEngagement />
      <BlogAndResources />
      <AIEthicsAwareness />
      <NewsletterSubscription />
    </div>
  );
}
