import Navbar from "../../components/layout/Navbar";
import { Container } from "../../styles/styles";
import pixelToRem from "../../utils/pxToRem";
import { Theme } from "../../utils/theme";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Home from "../Home";
import Projects from "../Projects";

const LandingPage = () => {
  return (
    <Theme>
      <Container flex="column" margin={pixelToRem(24, 112, 50)}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </Theme>
  );
};

export default LandingPage;
