import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import GlobalStyle from "./styles/globalStyles";
import { Container } from "./styles/styles";
import pixelToRem from "./utils/pxToRem";
import { Theme } from "./utils/theme";

const App = () => {
  return (
    <Theme>
      <Container flex="column" margin={pixelToRem(24, 112, 50)}>
        <GlobalStyle />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
    </Theme>
  );
};

export default App;
