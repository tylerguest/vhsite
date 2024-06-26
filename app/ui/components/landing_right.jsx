import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

// Define ImageThumbnail styled component here
const ImageThumbnail = styled.img`
  max-width: 100%;
  height: 150%; /* Ensure image aspect ratio is maintained */
  max-height: 100%; /* Ensure image doesn't overflow container */
`;

const LandingRightContainer = styled.div`
  background-color: black;
  border-opacity: 0.5;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const UpperContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding: 10px;
  padding-bottom: 20px;
  gap: 10px;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 29px;
  row-gap: 25px;
  align-items: center;
  justify-items: center;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const CheckoutButton = styled.button`
  grid-column: span;
  background-image: url('/checkoutbutton.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  color: black;
  font-size: 1.5em;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isClicked ? 0.3 : 1)};
  
  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.3;
  }
`;

const LowerContainer = styled.div`
  background-color: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;

const SubContainer = styled.div`
  background-image: url('/merchmain.png');
  background-size: cover;
  background-position: center;
  color: yellow;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.5;
  }
`;

const SmallBox = styled.div`
  background-image: url('/itemcontainer.png');
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
`;

const LandingRight = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [itemsInCart, setItemsInCart] = useState([]);

  const colors = [
    "#FF6347", // Tomato
    "#FFA07A", // LightSalmon
    "#20B2AA", // LightSeaGreen
    "#87CEFA", // LightSkyBlue
    "#9370DB", // MediumPurple
    "#FFD700", // Gold
    "#32CD32", // LimeGreen
    "#FF4500"  // OrangeRed
  ];

  const handleSubContainerClick = (color, index) => {
    setPopupContent({
      imageSrc: `/merchmain.png`, // Replace with actual image source
      color,
      index
    });
    setIsPopupVisible(true);
    setSelectedItemIndex(index);
  };

  const handleCheckoutMouseDown = () => {
    setIsCheckoutClicked(true);
  };

  const handleCheckoutMouseUp = () => {
    setIsCheckoutClicked(false);
  };

  const handleAddToCart = () => {
    if (popupContent) {
      setItemsInCart(prevItems => [
        ...prevItems,
        { ...popupContent, index: prevItems.length }
      ]);
    }
    setIsPopupVisible(false); // Close popup after adding to cart
  };

  return (
    <LandingRightContainer>
      <UpperContainer>
        <ItemsContainer>
          {Array.from({ length: 12 }, (_, index) => (
            <SmallBox key={index}>
              {itemsInCart[index] && (
                <ImageThumbnail src={itemsInCart[index].imageSrc} alt="Thumbnail" />
              )}
            </SmallBox>
          ))}
        </ItemsContainer>
        <CheckoutButton
          isClicked={isCheckoutClicked}
          onMouseDown={handleCheckoutMouseDown}
          onMouseUp={handleCheckoutMouseUp}
        >
        </CheckoutButton>
      </UpperContainer>
      <LowerContainer>
        {colors.map((color, index) => (
          <SubContainer
            key={index}
            bgColor={color}
            onClick={() => handleSubContainerClick(color, index)}
          >
            <h1></h1>
          </SubContainer>
        ))}
      </LowerContainer>
      {isPopupVisible && (
        <Popup
          content={popupContent}
          onClose={() => setIsPopupVisible(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </LandingRightContainer>
  );
};

export default LandingRight;
