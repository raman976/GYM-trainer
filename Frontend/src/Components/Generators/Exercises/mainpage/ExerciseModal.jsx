import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #121212;
  width: 85%;
  height: 85%;
  border-radius: 10px;
  padding: 2rem;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const ExerciseModal = ({ exercise, onClose }) => {
  if (!exercise) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {/* <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            color: "#ffffff",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)",
          }}
        >
          {exercise.name}
        </h2> */}

        <iframe
          width="100%"
          height="80%"
          style={{
            borderRadius: "10px",
            marginBottom: "1.5rem",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
          src={`https://www.youtube.com/embed/${
            exercise.video.split("v=")[1]
          }?modestbranding=1&rel=0&autoplay=1&mute=1`}
          allowFullScreen
        />
        <p style={{color:"#F97316",fontWeight:"bold",fontSize:"3vh",marginBottom:"1vh"}}>{exercise.name}</p>
       <p style={{color:"white",wordSpacing:"1.8vw",marginBottom:"1vh"}}><span style={{background:"#0F0F0F",padding:"0.5vh 1vh",border:"1px solid #3A3A3A",borderRadius:"10px"}}>{exercise.targetedpart}</span> <span style={{background:"#0F0F0F",padding:"0.5vh 1vh",border:"1px solid #3A3A3A",borderRadius:"10px"}}>{exercise.gender}</span> <span style={{background:"#0F0F0F",padding:"0.5vh 1vh",border:"1px solid #3A3A3A",borderRadius:"10px"}}>{exercise.type}</span></p>
       <p style={{color:"#F97316",marginBottom:"1vh",fontSize:"2.4vh"}}>Description</p>
       <p style={{color:"white"}}>{exercise.description}</p>
      </ModalContent>
    </Overlay>
  );
};

export default ExerciseModal;
