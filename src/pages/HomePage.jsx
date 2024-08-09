// Import components specific to the home page
import HeroSection from "../components/HeroSection/HeroSection";
import Marquee from "../components/Marquee/Marquee";
import LandingStats from "../components/LandingStats/LandingStats";
import DiscoverMakkah from "../components/DiscoverMakkah/DiscoverMakkah";
import AkhdarApp from "../components/AkhdarApp/AkhdarApp";
import News from "../components/News/News";
import Events from "../components/Events/Events";
import Partners from "../components/Partners/Partners";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Marquee />
      <LandingStats />
      <DiscoverMakkah />
      <AkhdarApp />
      <News />
      <Events />
      <Partners />
    </>
  );
};

export default HomePage;
