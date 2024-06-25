import React from "react";
import styled from "styled-components";

const LandingBottomContainer = styled.div`
  background-image: url('/vhsitebanner.gif'); /* Path relative to the public folder */
  background-size: cover;
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  white-space: nowrap;
`;

const LandingBottom = () => {
  return (
    <LandingBottomContainer>
      <h1></h1>
    </LandingBottomContainer>
  );
}

export default LandingBottom;
