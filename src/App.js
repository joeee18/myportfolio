import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import './App.css'
import Experience from "./components/Experience/Experience";
import Work from "./components/Works/Works"
import Portfolio from "./components/Portfolio/Portfolio"
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


import {themeContext} from "./Context"
import { useContext } from "react";
import ScrollButton from "./components/ScrollButton/ScrollButton"
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >

<Navbar />

<Intro />
<Services />
<Experience />
<Work />
<Portfolio />
<Testimonial />
<Contact />
<Footer />
<ScrollButton />
    </div>
  );
}
export default App;
