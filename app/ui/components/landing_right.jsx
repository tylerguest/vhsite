import React from "react";
import styled from "styled-components";

const LandingRightContainer = styled.div`
  /* Add your styles here */
  background-color: none;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;


const LandingRight = () => {
  return (
    <LandingRightContainer>
      <h1>Store</h1>
    </LandingRightContainer>
  );
}

export default LandingRight;