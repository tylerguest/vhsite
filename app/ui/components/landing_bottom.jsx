import React from "react";
import styled from "styled-components";

const LandingBottomContainer = styled.div`
  background-color: black;
  border: 2px solid lime;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* Align items to the start for scrolling */
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent wrapping to new lines */
`;

const SubContainer = styled.div`
  background-color: none;
  border: 2px solid white;
  color: yellow;
  width: 23%; /* Adjust width as needed */
  height: 100%;
  flex: 0 0 auto; /* Prevent flex items from shrinking */
  display: inline-block; /* Align items horizontally */
  //margin-right: 10px; /* Spacing between items */
`;

const LandingBottom = () => {
  return (
    <LandingBottomContainer>
      <SubContainer>
        <h1>Merch 1</h1>
      </SubContainer>
      <SubContainer>
        <h1>Merch 2</h1>
      </SubContainer>
      <SubContainer>
        <h1>Merch 3</h1>
      </SubContainer>
      <SubContainer>
        <h1>Merch 4</h1>
      </SubContainer>
      <SubContainer>
        <h1>Merch 5</h1>
      </SubContainer>
      <SubContainer>
        <h1>Merch 6</h1>
      </SubContainer>
      <SubContainer>
        <h1>Merch 7</h1>
      </SubContainer>
      <SubContainer>
        <h1>Merch 8</h1>
      </SubContainer>
    </LandingBottomContainer>
  );
}

export default LandingBottom;
