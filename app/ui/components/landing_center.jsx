// LandingCenter.jsx
import React, { useContext } from "react";
import styled from "styled-components";
import { VideoContext } from "./VideoContext";

const LandingCenterContainer = styled.div`
  background-color: black;
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
  border: none; /* Ensure there is no border */
  outline: none; /* Ensure there is no outline */
  box-shadow: none; /* Ensure there is no box-shadow */
`;

const LandingCenter = () => {
  const { videoId } = useContext(VideoContext); // Use the context

  return (
    <LandingCenterContainer>
      <YouTubeWrapper>
        <YouTubeIframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></YouTubeIframe>
      </YouTubeWrapper>
    </LandingCenterContainer>
  );
};

export default LandingCenter;
