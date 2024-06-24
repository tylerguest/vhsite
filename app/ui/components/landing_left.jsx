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
`;

const SubContainer = styled.div`
  background-color: none;
  border: 2px solid white;
  color: yellow;
  width: 100%;
  height: 100%;
  //margin-bottom: 10px;
  //padding: 10px;
`;


const LandingLeft = () => {
  return (
    <LandingLeftContainer>
      <SubContainer>
        <h1>Empty 1</h1>
      </SubContainer>
      <SubContainer>
        <h1>Empty 2</h1>
      </SubContainer>
      <SubContainer>
        <h1>Empty 3</h1>
      </SubContainer>
      <SubContainer>
        <h1>Empty 4</h1>
      </SubContainer>
    </LandingLeftContainer>
  );
}

export default LandingLeft;