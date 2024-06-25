import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

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

const CheckoutBox = styled.div`
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

  const handleSubContainerClick = (color) => {
    setPopupContent(
      <div>
        <h2 style={{ color }}></h2>
        <p>Details about the item with background color {color}.</p>
      </div>
    );
    setIsPopupVisible(true);
  };

  return (
    <LandingRightContainer>
      <UpperContainer>
        <ItemsContainer>
          {Array.from({ length: 12 }, (_, index) => (
            <SmallBox key={index} />
          ))}
        </ItemsContainer>
        <CheckoutBox></CheckoutBox>
      </UpperContainer>
      <LowerContainer>
        {Array.from({ length: colors.length }, (_, index) => (
          <SubContainer
            key={index}
            bgColor={colors[index]}
            onClick={() => handleSubContainerClick(colors[index])}
          >
            <h1></h1>
          </SubContainer>
        ))}
      </LowerContainer>
      {isPopupVisible && <Popup content={popupContent} onClose={() => setIsPopupVisible(false)} />}
    </LandingRightContainer>
  );
};

export default LandingRight;
