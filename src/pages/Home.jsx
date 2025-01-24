import React from "react";
import MainLayout from "../layouts/MainLayout";
import Donation from "../components/large/Donation";
import Mission from "../components/large/Mission";
import Help from "../components/large/Help";
import Project from "../components/large/Project";
import Program from "../components/large/Program";
import Event from "../components/large/Event";
import Banner from "../components/large/Banner";
import BannerBottom from "../components/medium/BannerBottom";
import Scrolling from "../components/medium/Scrolling";
import Community from "../components/large/Community";

function Home() {
  return (
    <MainLayout>
      <Banner />
      <Donation />
      <Mission />
      <Help />
      <Program />
      <Community />
      <Scrolling />

      <Project />
      <Event />
      <BannerBottom />
    </MainLayout>
  );
}

export default Home;
