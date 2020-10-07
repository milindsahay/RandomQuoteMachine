import React, { useState } from "react";
import { render } from "react-dom";
import Container from "./container";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Container />
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
