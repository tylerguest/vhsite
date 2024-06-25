import React from "react";
import styled from "styled-components";

const LandingBottomContainer = styled.div`
  background-color: black;
  //border: 2px solid lime;
  boreder-opacity: 0.5;
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

const LandingBottom = () => {
  return (
    <LandingBottomContainer>
    </LandingBottomContainer>
  );
}

export default LandingBottom;
