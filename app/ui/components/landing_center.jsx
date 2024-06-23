import React from "react";
import styled from "styled-components";

const LandingCenterContainer = styled.div`
  /* Add your styles here */
  background-color: none;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;


const LandingCenter = () => {
  return (
    <LandingCenterContainer>
      <h1>Video</h1>
    </LandingCenterContainer>
  );
}

export default LandingCenter;