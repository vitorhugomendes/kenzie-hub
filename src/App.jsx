import { Reset } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

export default App;
