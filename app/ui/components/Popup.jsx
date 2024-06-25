import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the popup is on top */
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;  /* Adjust as needed */
  height: 80%; /* Adjust as needed */
  max-width: 600px; /* Adjust as needed */
  max-height: 800px; /* Adjust as needed */
  overflow-y: auto;
  position: relative; /* To position the close button */

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  color: black;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Popup = ({ content, onClose }) => (
  <Overlay onClick={onClose}>
    <PopupContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      {content}
    </PopupContent>
  </Overlay>
);

export default Popup;
