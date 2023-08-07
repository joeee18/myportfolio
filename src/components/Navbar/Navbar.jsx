import React from 'react';
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from "react-scroll"
import { useContext } from "react";
import {motion} from "framer-motion";

const Navbar = () => {
      const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
return (
<div className="n-wrapper" >
    <div className="n-Left">
        <div className="n-name" style={{ color: darkMode ? "white" : "" }}>Joe </div>
        <Toggle/>
    </div>
    <div className="n-right">
    <div className="n-List">

    <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>

</div>
<button className="button n-button">
 contact me
 </button>
</div>
</div>
)
}
export default Navbar
