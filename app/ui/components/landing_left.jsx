import React from "react";
import styled from "styled-components";

const LandingLeftContainer = styled.div`
  background-color: black;
  border: 2px solid lime;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto; /* Enable vertical scrolling */
  white-space: nowrap;
`;

const SubContainer = styled.div`
  background-color: none;
  border: 2px solid white;
  color: yellow;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
`;

const LandingLeft = () => {
  return (
    <LandingLeftContainer>
      <SubContainer>
        <h1>Video 1</h1>
      </SubContainer>
      <SubContainer>
        <h1>Video 2</h1>
      </SubContainer>
      <SubContainer>
        <h1>Video 3</h1>
      </SubContainer>
      <SubContainer>
        <h1>Video 4</h1>
      </SubContainer>
      <SubContainer>
        <h1>Video 5</h1>
      </SubContainer>
      <SubContainer>
        <h1>Video 6</h1>
      </SubContainer>
      <SubContainer>
        <h1>Video 7</h1>
      </SubContainer>
      <SubContainer>
        <h1>Video 8</h1>
      </SubContainer>
    </LandingLeftContainer>
  );
}

export default LandingLeft;
