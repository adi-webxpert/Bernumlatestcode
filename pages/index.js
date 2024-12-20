import React from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import MainBanner from "../components/HomeDemoTwo/MainBanner";
import FeaturedService from "../components/HomeDemoTwo/FeaturedService";
import AboutSection from "../components/HomeDemoTwo/AboutSection";
import ServicesCard from "../components/Common/ServicesCard";
import WhatWeDo from "../components/Common/WhatWeDo";
import TestimonialStyleTwo from "../components/Common/TestimonialStyleTwo";
import StartProjectWithUs from "../components/Common/StartProjectWithUs";
import Footer from "../components/_App/Footer";
import DemoFAQ from "../components/Common/DemoFAQ";

const Index2 = () => {
  return (
    <>
      <NavbarStyleTwo />

      <MainBanner />

      <FeaturedService />

      <AboutSection />

      <ServicesCard />

      <WhatWeDo />

      {/* <TestimonialStyleTwo /> */}
      <StartProjectWithUs />
      <DemoFAQ />

      <Footer />
    </>
  );
};

export default Index2;
