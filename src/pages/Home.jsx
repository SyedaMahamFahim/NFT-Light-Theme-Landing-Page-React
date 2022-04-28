import React from "react";
import {
  HeroSection,
    About,
    Features,
    TopNfts,
    Roadmap,
    Team,
    Contact
} from '../components/HomeComponents/index'
const Home = () => {
  return (<>
  
  <div>
    <HeroSection/>
    <About/>
    <Features/>
    <TopNfts/>
    <Roadmap/>
    <Team/>
    <Contact/>
  </div>
  </>);
};

export default Home;
