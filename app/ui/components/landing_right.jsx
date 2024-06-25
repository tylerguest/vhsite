import React from "react";
import styled from "styled-components";

const LandingRightContainer = styled.div`
  background-color: black;
  border-opacity: 0.5;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box; /* Ensure padding/border included in size */
`;

const UpperContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto; /* Add another row for the spanning box */
  padding: 10px;
  padding-bottom: 20px;
  gap: 10px; /* Add some gap between rows */
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for items */
  grid-template-rows: repeat(3, 1fr); /* 3 rows for items */
  column-gap: 29px; /* Same spacing between rows and columns */
  row-gap: 25px; /* Spacing between rows */
  align-items: center;
  justify-items: center;
  padding: 10px;
  width: 100%;
  box-sizing: border-box; /* Ensure padding/border included in size */
`;

const CheckoutBox = styled.div`
  grid-column: span; /* Span across all columns */
  background-image: url('/checkoutbutton.png'); /* Path relative to the public folder */
  background-size: cover; /* Ensure the image covers the entire box */
  background-position: center; /* Center the image */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; /* Adjust height as needed */
  width: 100%;
  color: black;
  font-size: 1.5em;
  box-sizing: border-box; /* Ensure padding/border included in size */
`;

const LowerContainer = styled.div`
  background-color: none;
  width: 100%;
  height: 100%; /* Half the height */
  box-sizing: border-box; /* Ensure padding/border included in size */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const SubContainer = styled.div`
  background-image: url('/merchmain.png'); /* Path relative to the public folder */
  background-size: cover; /* Ensure the image covers the entire box */
  background-position: center; /* Center the image */
  color: yellow;
  width: 100%; /* Full width of the parent */
  height: 70%; /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor}; /* Dynamic background color */
`;

const SmallBox = styled.div`
  background-image: url('/itemcontainer.png'); /* Path relative to the public folder */
  background-size: cover; /* Ensure the image covers the entire box */
  background-position: center; /* Center the image */
  width: 50px; /* Ensure it fills the grid cell */
  height: 50px;
  box-sizing: border-box; /* Ensure padding/border included in size */
`;

const LandingRight = () => {
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

  return (
    <LandingRightContainer>
      <UpperContainer>
        <ItemsContainer>
          {Array.from({ length: 12 }, (_, index) => (
            <SmallBox key={index} />
          ))}
        </ItemsContainer>
        <CheckoutBox>
        
        </CheckoutBox>
      </UpperContainer>
      <LowerContainer>
        {Array.from({ length: colors.length }, (_, index) => (
          <SubContainer key={index} bgColor={colors[index]}>
            <h1></h1>
          </SubContainer>
        ))}
      </LowerContainer>
    </LandingRightContainer>
  );
};

export default LandingRight;
