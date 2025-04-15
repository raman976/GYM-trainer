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
  background: linear-gradient(to right, #423C40, #3A5C60);
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
        <h2>{exercise.name}</h2>
        <iframe
  width="100%"
  height="80%"
  src={`https://www.youtube.com/embed/${exercise.video.split("v=")[1]}?modestbranding=1&rel=0&autoplay=1&mute=1`}

  allowFullScreen
/>
        <p><strong>Target:</strong> {exercise.targetedpart}</p>
        <p><strong>Type:</strong> {exercise.type}</p>
        <p><strong>Gender:</strong> {exercise.gender}</p>
      </ModalContent>
    </Overlay>
  );
};

export default ExerciseModal;
