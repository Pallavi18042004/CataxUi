import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import MediaSection from "./components/MediaSection";
import Feature from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import ReportSection from "./components/ReportSection";
import CuratedSection from "./components/CuratedSection";
import AuroraHeading from "./components/AuroraHeading";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MediaSection />
      <Feature />
      <StepsSection/>
      <ReportSection/>
      <CuratedSection/>
      < AuroraHeading/>
      <Footer />

    </>
  );
}

export default App;
