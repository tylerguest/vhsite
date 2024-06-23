import React from "react";
import styled from "styled-components";

const LandingCenterContainer = styled.div`
  background-color: black;
  border: 2px solid lime;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const YouTubeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`;

const YouTubeIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LandingCenter = () => {
  // Replace 'videoId' with your YouTube video ID
  const videoId = "69tVVr6yGcs?si=7C4CSIH3BJBK45av"; // Replace with your actual YouTube video ID

  return (
    <LandingCenterContainer>
      <YouTubeWrapper>
        <YouTubeIframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></YouTubeIframe>
      </YouTubeWrapper>
    </LandingCenterContainer>
  );
};

export default LandingCenter;
