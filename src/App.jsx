import ThemeProvider from "./theme/index";
import Router from "./Routes/Section";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
