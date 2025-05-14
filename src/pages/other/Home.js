import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUs />

      {/* Courses Section */}
      <Courses />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
