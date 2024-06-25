// LandingLeft.jsx
import React, { useContext } from "react";
import styled from "styled-components";
import { VideoContext } from "./VideoContext";

const LandingLeftContainer = styled.div`
  background-color: black;
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
  color: yellow;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; /* Ensure child elements don't overflow the container */

  &:hover img {
    opacity: 0.5; /* Darken opacity on hover */
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease; /* Smooth transition for opacity change */
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  color: white;
  font-size: 2em;
  padding: 10px 20px;
  cursor: pointer;
`;

const LandingLeft = () => {
  const { setVideoId } = useContext(VideoContext); // Use the context

  const videoIds = [
    "tebWaDWKQOk",
    "W6Zfmp_5cK4",
    "2olCbyqtWjI",
    "UJkJTUKmaAM",
    "_Psfyn4jkis",
    "bAn-GIW045A",
    "u8mFkFz284w",
    "69tVVr6yGcs",
  ];

  return (
    <LandingLeftContainer>
      {videoIds.map((videoId, index) => (
        <SubContainer key={index}>
          <Thumbnail src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt={`YouTube Video ${index + 1}`} />
          <PlayButton onClick={() => setVideoId(videoId)}>▶</PlayButton>
        </SubContainer>
      ))}
    </LandingLeftContainer>
  );
};

export default LandingLeft;
