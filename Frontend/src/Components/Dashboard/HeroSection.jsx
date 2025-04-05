// HeroSection.jsx
import React from "react";
import ReactPlayer from "react-player";
import Typewriter from "typewriter-effect";
import { HeroContainer, VideoBackground, Overlay, TextOverlay } from "./StyledDashboard";

const HeroSection = () => {
  return (
    <HeroContainer>
      <VideoBackground>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=HQfF5XRVXjU"
          playing
          loop
          muted
          controls={false}
          width="100%"
          height="100%"
        />
      </VideoBackground>
      <Overlay />
      <TextOverlay>
        <Typewriter
          options={{
            strings: [
              "Sweat Smarter.",
              "Fueled by AI. Driven by You.",
              "Smart Fitness Starts Here.",
              "AI Coach. Real Results.",
              "Precision in Every Rep.",
              "Your Body. Your Data. Your Power."
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </TextOverlay>
    </HeroContainer>
  );
};

export default HeroSection;