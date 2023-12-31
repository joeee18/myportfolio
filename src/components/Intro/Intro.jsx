import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vectorl from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png' ;
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion";

  const transition = {duration:2 , type :'spring'}

const Intro = () => {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span> Youssef Magdy </span>
          <span> Frontend Developer with high level of experince in web designing and development 
          </span>
      </div>
<button className="button i-button">
    Hire Me
</button>
<div className="i-icons">
    <img src={Github} alt=""/>
    <img src={LinkedIn} alt=""/>
    <img src={Instagram} alt=""/>

</div>
      </div>
      <div className="i-right">
      <img src={Vectorl} alt=""/>
    <img src={Vector2} alt=""/>
    <img src={boy} alt=""/>

    {/*1st */}
    < motion.img
    initial={{left:'-36%'}}
    whileInView={{left: '-24%'}}
    transition={transition}
    src={glassesimoji}
     alt=""
     />
    {/*2st */}

    <motion.div
    initial={{left:'-4%', left:'-74%'}}
    whileInView={{left: '68%'}}
    transition={transition}
     style={{top: '-4%', left:'68%'}}
       className='floating-div'  >
        <FloatingDiv  image={Crown} txt1='Web' txt2='Developer' />
    </motion.div>
    {/*3st */}

    <motion.div
    initial={{left:'9rem', left:'18rem'}}
    whileInView={{left: '1rem'}}
    transition={transition}
     style={{top: '18rem', left:'0rem'}}
     className='floating-div'
     >
        <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
    </motion.div>
    <div className="blur" style={{background:"rgb(238 210 255)"}}>
    </div>
    <div className="blur" 
    style={{background:"rgb(162, 236, 255)",
    background: '#C1F5FF',
    top :'17rem',
    width: '21rem',
    height: '11rem',
    left: '-9rem',
}}>
    </div>
      </div>
    </div>
  )
}

export default Intro;
