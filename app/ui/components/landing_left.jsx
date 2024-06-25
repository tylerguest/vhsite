import React from "react";
import styled from "styled-components";

const LandingLeftContainer = styled.div`
  background-color: black;
  //border: 2px solid lime;
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
  //border: 2px solid white;
  color: yellow;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  font-size: 2em;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const LandingLeft = () => {
  const videoIds = [
    "dQw4w9WgXcQ",
    "9bZkp7q19f0",
    "3JZ_D3ELwOQ",
    "fJ9rUzIMcZQ",
    "tVj0ZTS4WF4",
    "2Vv-BfVoq4g",
    "kXYiU_JCYtU",
    "YQHsXMglC9A"
  ];

  return (
    <LandingLeftContainer>
      {videoIds.map((videoId, index) => (
        <SubContainer key={index}>
          <Thumbnail src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt={`YouTube Video ${index + 1}`} />
          <PlayButton onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}>▶</PlayButton>
        </SubContainer>
      ))}
    </LandingLeftContainer>
  );
};

export default LandingLeft;
