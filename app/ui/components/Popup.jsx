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
  background: black;
  padding: 20px;
  border-radius: 8px;
  width: 80%;  /* Adjust as needed */
  height: 80%; /* Adjust as needed */
  max-width: 700px; /* Adjust as needed */
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
  top: 16px;
  right: 30px;
  background: transparent;
  color: white;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Container1 = styled.div`
  background-color: black;
  padding: 10px;
  height: 600px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.div`
  background-color: lightgreen;
  height: 101px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageThumbnail = styled.img`
  max-width: 100%;
  height: 150%; /* Ensure image aspect ratio is maintained */
  max-height: 100%; /* Ensure image doesn't overflow container */
`;

const AddToCartButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

const Popup = ({ content, onClose, onAddToCart }) => (
  <Overlay onClick={onClose}>
    <PopupContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <Container1>
        {content && (
          <ImageThumbnail src={content.imageSrc} alt="Thumbnail" />
        )}
      </Container1>
      <Container2>
        <AddToCartButton onClick={onAddToCart}>Add to Cart</AddToCartButton>
      </Container2>
    </PopupContent>
  </Overlay>
);

export default Popup;
