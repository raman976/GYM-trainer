import React from "react";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import Features from "./Features";
import Header from "./Header";
import QuoteCard from "./QuoteCard";

const Dashboard = () => {
  return (
    <div
      style={{ overflowY: "auto", height: "100vh", backgroundColor: "black" }}
    >
      <Header />
      <HeroSection />
      <QuoteCard/>
      <Features/>
      <Footer />
    </div>
  );
};

export default Dashboard;
