'use client';
import React from "react";
import styled from "styled-components";
import LandingTop from "./ui/components/landing_top";
import LandingLeft from "./ui/components/landing_left";
import LandingCenter from "./ui/components/landing_center";
import LandingRight from "./ui/components/landing_right";
import LandingBottom from "./ui/components/landing_bottom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkslategray;
  display: grid;
  grid-template-rows: 75px 1fr 20vh; /* 3 rows: top, middle (content), bottom */
  grid-template-columns: 1fr 3fr 1fr; /* 3 columns for left, center, right */
  grid-template-areas: 
    "top top top"
    "left center right"
    "left bottom right";
`;

const Top = styled.div`
  grid-area: top;
`;

const Left = styled.div`
  grid-area: left;
`;

const Center = styled.div`
  grid-area: center;
`;

const Right = styled.div`
  grid-area: right;
`;

const Bottom = styled.div`
  grid-area: bottom;
`;

export default function Home() {
  return (
    <main>
      <Container>
        <Top>
          <LandingTop />
        </Top>
        <Left>
          <LandingLeft />
        </Left>
        <Center>
          <LandingCenter />
        </Center>
        <Right>
          <LandingRight />
        </Right>
        <Bottom>
          <LandingBottom />
        </Bottom>
      </Container>
    </main>
  );
}
