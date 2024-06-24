import React from "react";
import styled from "styled-components";

const LandingRightContainer = styled.div`
  background-color: black;
  border: 2px solid lime;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box; /* Ensure padding/border included in size */
`;

const UpperContainer = styled.div`
  display: grid;
  grid-template-rows: 28vh 70px; /* Two rows: one for items and one for the button */
  padding: 10px;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for items */
  grid-template-rows: repeat(3, 1fr); /* 3 rows for items */
  gap: 35px; /* Same spacing between rows and columns */
  padding: 10px;
  width: 100%;
  box-sizing: border-box; /* Ensure padding/border included in size */
`;

const LowerContainer = styled.div`
  background-color: none;
  border-top: 2px solid lime;
  width: 100%;
  height: 100%; /* Half the height */
  box-sizing: border-box; /* Ensure padding/border included in size */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const SubContainer = styled.div`
  background-color: none;
  border: 2px solid white;
  color: yellow;
  width: 100%; /* Full width of the parent */
  height: 70%; /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;

`;

const SmallBox = styled.div`
  background-color: none;
  border: 2px solid white;
  color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1; /* Maintain square aspect ratio */
  width: 100%; /* Ensure it fills the grid cell */
  box-sizing: border-box; /* Ensure padding/border included in size */
`;

const CheckoutButton = styled.button`
  grid-column: span 3; /* Span across all columns */
  padding: 10px;
  background-color: lime;
  color: black;
  border: 2px solid white;
  font-size: 1.2em;
  cursor: pointer;
  justify-self: center;
  align-self: center;
  width: 90%; /* Adjust as needed */
  box-sizing: border-box;
`;

const LandingRight = () => {
  return (
    <LandingRightContainer>
      <UpperContainer>
        <ItemsContainer>
          {Array.from({ length: 12 }, (_, index) => (
            <SmallBox key={index}>
              <h1>Item {index + 1}</h1>
            </SmallBox>
          ))}
        </ItemsContainer>
        <CheckoutButton>Checkout</CheckoutButton>
      </UpperContainer>
      <LowerContainer>
        {Array.from({ length: 8 }, (_, index) => (
          <SubContainer key={index}>
            <h1>Merch {index + 1}</h1>
          </SubContainer>
        ))}
      </LowerContainer>
    </LandingRightContainer>
  );
};

export default LandingRight;
