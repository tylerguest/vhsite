import React from "react";
import styled from "styled-components";
import Image from "next/image";

const LandingTopContainer = styled.div`
  /* Add your styles here */
  background-color: black;
  //border: 2px solid lime;
  border-opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 80%; /* Adjust width as needed */
  height: 80vh; /* Adjust height to desired proportion */
  max-width: 100%; /* Ensure image doesn't exceed wrapper's width */
  max-height: 80%; /* Ensure image doesn't exceed wrapper's height */
`;

const LandingTop = () => {
  return (
    <LandingTopContainer>
      <ImageWrapper>
      <Image
          src="/VH-Logo-2023-PNG-white.png" // Adjust path based on your project structure
          alt="Header Image"
          layout="fill" // Use layout="fill" to fill the parent container
          objectFit="contain" // Adjust objectFit based on your layout needs
          quality={100} // Adjust image quality if needed
        />
      </ImageWrapper>
    </LandingTopContainer>
  );
}

export default LandingTop;