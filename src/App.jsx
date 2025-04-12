import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import MediaSection from "./components/MediaSection";
import Feature from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import About from "./components/About";
import CuratedSection from "./components/CuratedSection";
import AuroraHeading from "./components/AuroraHeading";
import Web3Section from "./components/Web3Section";
import ReportSection from "./components/ReportSection";
import IndividualsPage from "./pages/IndividualsPage";
import EnterprisesPage from "./pages/EnterprisesPage";
import AccountantsPage from "./pages/AccountantsPage";
import PartnershipSection from "./components/PartnershipSection";
import GetStartedSection from "./components/GetStartedSection";


function App() {
  return (
    <Router>
      <Routes>


        <Route path="/" element={
          <>
          <div className="bg-gradient-to-r from-[#FED8D8] to-white">
            <Navbar />
            <HeroSection />
            <MediaSection />
            <Feature />
            <About />
            <StepsSection />
            <ReportSection />
            <CuratedSection />
            <Web3Section />
            <AuroraHeading />
            <PartnershipSection/>
            <GetStartedSection/>
            <Footer />
            </div>
          </>
        } />


        <Route path="/individuals" element={
          <>
            <Navbar />
            <IndividualsPage />

          </>
        } />


        <Route path="/enterprises" element={
          <>
            <Navbar />
            <EnterprisesPage />

          </>
        } />


        <Route path="/accountants" element={
          <>
            <Navbar />
            <AccountantsPage />

          </>
        } />

      </Routes>
    </Router>
  );
}

export default App;
