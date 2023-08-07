import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import CV from './CV.pdf';
import {motion} from "framer-motion"
const transition = {duration:1 , type :'spring'}

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  

  return (
    <div className="services" id='Services' >
      {/* left side */}
      <div className="awesome">
        
        <span style={{ color: darkMode ? "white" : "" }} >My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
        whileInView={{left:'27rem'}}
        initial={{left:'25%'}}
        transition={transition}
         style={{left:'27rem'}}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
      </motion.div>
        {/* second card */}
        
        <motion.div
        whileInView={{left:'9rem'}}
        initial={{left:'25%'}}
        transition={transition} 
        style={{top:'14rem', left:'9rem'}}>

          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
      </motion.div>
        {/* 3rd */}
        
        <motion.div
        whileInView={{left:'25rem'}}
        initial={{left:'25%'}}
        transition={transition}
        style={{top:'19rem', right:'-25rem'}}>

          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
      </motion.div>
      <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;