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
  background: linear-gradient(to right, #7F7FA0 50%, #A8B2C5 100%);
  width: 75%;
  height: 75%;
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
        {/* <h2 style={{textAlign:"center"}}>{exercise.name}</h2>
        <iframe
  width="100%"
  height="80%"
  src={`https://www.youtube.com/embed/${exercise.video.split("v=")[1]}?modestbranding=1&rel=0&autoplay=1&mute=1`}

  allowFullScreen
/>
        <p style={{fontSize:"25px"}}><strong>Target:</strong> {exercise.targetedpart}</p>
        <p style={{fontSize:"25px"}}><strong>Type:</strong> {exercise.type}</p>
        <p style={{fontSize:"25px"}}><strong>Gender:</strong> {exercise.gender}</p> */}
        <h2 style={{
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "1.5rem",
  color: "#ffffff",
  textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)"
}}>
  {exercise.name}
</h2>

<iframe
  width="100%"
  height="80%"
  style={{
    borderRadius: "10px",
    marginBottom: "1.5rem",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)"
  }}
  src={`https://www.youtube.com/embed/${exercise.video.split("v=")[1]}?modestbranding=1&rel=0&autoplay=1&mute=1`}
  allowFullScreen
/>

<p style={{
  fontSize: "1.5rem",
  color: "#f0f0f0",
  marginBottom: "0.8rem",
  lineHeight: "1.6",
  textAlign: "center"
}}>
  <strong style={{ color: "#FFD700" }}>🎯 Target:</strong> {exercise.targetedpart}
</p>

<p style={{
  fontSize: "1.5rem",
  color: "#f0f0f0",
  marginBottom: "0.8rem",
  lineHeight: "1.6",
  textAlign: "center"
}}>
  <strong style={{ color: "#87CEEB" }}>⚡ Type:</strong> {exercise.type}
</p>

<p style={{
  fontSize: "1.5rem",
  color: "#f0f0f0",
  marginBottom: "0.8rem",
  lineHeight: "1.6",
  textAlign: "center"
}}>
  <strong style={{ color: "#FF69B4" }}>🧍 Gender:</strong> {exercise.gender}
</p>

      </ModalContent>
    </Overlay>
  );
};





export default ExerciseModal;
