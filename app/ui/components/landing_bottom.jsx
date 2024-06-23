import React from "react";
import styled from "styled-components";

const LandingBottomContainer = styled.div`
  /* Add your styles here */
  background-color: none;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;


const LandingBottom = () => {
  return (
    <LandingBottomContainer>
      <h1>Merch Scroll</h1>
    </LandingBottomContainer>
  );
}

export default LandingBottom;