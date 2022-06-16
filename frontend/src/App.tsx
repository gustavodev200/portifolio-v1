import GlobalStyle from "./styles/globalStyles";
import { Theme } from "./utils/theme";
import AllRoutes from "../src/routes";
import Home from "./pages/Home";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <AllRoutes />
    </Theme>
  );
};

export default App;
