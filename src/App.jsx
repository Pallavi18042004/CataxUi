import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import MediaSection from "./components/MediaSection";

import Feature from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import About from "./components/About";
import CuratedSection from "./components/CuratedSection";

import Testimonials from "./components/Testimonials";
import Web3Section from "./components/Web3Section";
import ReportSection from "./components/ReportSection";
import IndividualsPage from "./pages/IndividualsPage";
import EnterprisesPage from "./pages/EnterprisesPage";
import AccountantsPage from "./pages/AccountantsPage";
import PartnershipSection from "./components/PartnershipSection";
import GetStartedSection from "./components/GetStartedSection";
import Available from "./components/Available";
import AuroraHeading from "./components/AuroraHeading";
// import Features2 from "./components/FeaturesSection2";





function App() {
  return (
    <Router>
      <Routes>


        <Route path="/" element={
          <>

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


            <PartnershipSection />
            <Testimonials />
            <Available />


            <GetStartedSection />
            <Footer />

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
