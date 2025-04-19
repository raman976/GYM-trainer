// HeroSection.jsx
import React from "react";
import ReactPlayer from "react-player";
import Typewriter from "typewriter-effect";
import { HeroContainer, VideoBackground, Overlay, TextOverlay } from "./StyledDashboard";
import { ScrollDownArrow } from "./StyledDashboard";


const HeroSection = () => {
  return (
    <HeroContainer>
      <VideoBackground>
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      url="https://www.youtube.com/watch?v=HQfF5XRVXjU"
      playing
      loop
      muted
      controls={false}
      width="100%"
      height="100%"
    />
  </div>
</VideoBackground>
      <Overlay />
      <TextOverlay>
      
        <Typewriter
          options={{
            strings: [
              'Sweat <span style="color: #DAA520;">Smarter</span>.',
              'Fueled by <span style="color: #DAA520;">AI </span>Driven by You.',
              'Smart <span style="color: #DAA520;">Fitness </span> Starts Here.',
              'AI Coach. Real <span style="color: #DAA520;">Results </span>.',
              '<span style="color: #DAA520;">Precision </span> in Every Rep.',
              'Your <span style="color: #DAA520;">Body </span>. Your <span style="color: #DAA520;">Data </span>. Your <span style="color: #DAA520;">Power </span>.'
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            html: true,

          }}
        />
        <ScrollDownArrow>
        <a href="#features">
  <svg 
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
  </a>
</ScrollDownArrow>
      </TextOverlay>
      
      
    </HeroContainer>
  );
};

export default HeroSection;