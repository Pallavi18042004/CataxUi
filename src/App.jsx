import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MediaSection from "./components/MediaSection";
import About from "./components/About";
import CuratedSection from "./components/CuratedSection";
import StepsSection from "./components/StepsSection";
import AuroraHeading from "./components/AuroraHeading";
import Available from "./components/Available";
import FeaturesSection from "./components/FeaturesSection";
import GetStartedSection from "./components/GetStartedSection";
import PartnershipSection from "./components/PartnershipSection";
import ReportSection from "./components/ReportSection";
import Testimonials from "./components/Testimonials";
import Web3Section from "./components/Web3Section";
import AccountantsPage from "./pages/AccountantsPage";
import EnterprisesPage from "./pages/EnterprisesPage";
import IndividualsPage from "./pages/IndividualsPage";
import Navbar from "./components/navbar";
import AboutUs from "./pages/AboutPage";
import QuoteSection from "./pages/QuoteSection";
import WhatDrivesUs from "./pages/WhatDrivesUs";
import Peoples from "./pages/Peoples";
// import Features2 from "./components/FeaturesSection2";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <MediaSection />
              <FeaturesSection />
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
          }
        />
        <Route
          path="/individuals"
          element={
            <>
              <Navbar />
              <IndividualsPage />
            </>
          }
        />
        <Route
          path="/enterprises"
          element={
            <>
              <Navbar />
              <EnterprisesPage />
            </>
          }
        />
        <Route
          path="/AboutPage"
          element={
            <>
              <Navbar />
              <AboutUs />
              <QuoteSection/>
              <WhatDrivesUs/>
              <Peoples/>
              <About/>
              <GetStartedSection/>
              <Footer />
            </>
          }
        />
        
        
       
        
        <Route
          path="/accountants"
          element={
            <>
              <Navbar />
              <AccountantsPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
