import React from "react";
import styled from "styled-components";

const LandingRightContainer = styled.div`
  background-color: black;
  border: 2px solid lime;
  color: white;
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 columns */
  gap: 10px; /* Same spacing between rows and columns */
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box; /* Ensure padding/border included in size */
`;


const LandingRight = () => {
  return (
    <LandingRightContainer>
    </LandingRightContainer>
  );
}

export default LandingRight;
