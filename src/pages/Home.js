import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import WhySublime from "../components/home/WhySublime";
import OurNumbers from "../components/home/OurNumbers";
import InfoProvided from "../components/home/InfoProvided";
import Students from "../components/home/Students";
import Partners from "../components/home/Partners";
import FAQs from "../components/home/FAQs";
import Team from "../components/home/Team";
import KindlyNote from "../components/home/KindlyNote";
import ScrollToTopButton from "../components/ScrollToTop";



const Home = () => {

  return (
    <StyledHome>
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <WhySublime />
      </div>
      <OurNumbers />
      <div className="container">
        <KindlyNote />
        <InfoProvided />
        <Services />
      </div>
      <Students />
      <div className="container">
        <Partners />
        <FAQs />
        <KindlyNote />
        <Team />
      </div>
      <Contact />
      <Footer />
      <ScrollToTopButton/>
    </StyledHome>

  );
};

export default Home;

const StyledHome = styled.main`
background-color: var(--light-color);
color: var(--dark-color);
align-items: center;
justify-content: center;
overflow-x: hidden;
 margin: 0 auto;
  padding: 0;
  width: 100%;

`;