import React from "react";
import styled from "styled-components";

const LandingLeftContainer = styled.div`
  /* Add your styles here */
  background-color: none;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;


const LandingLeft = () => {
  return (
    <LandingLeftContainer>
      <h1>Playlist</h1>
    </LandingLeftContainer>
  );
}

export default LandingLeft;