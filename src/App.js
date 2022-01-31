import React from "react";
import Cabecalho from "./Components/Cabecalho/Cabecalho";
import HomePages from "./Pages/HomePages";
import { GlobalStyle } from "./Components/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <HomePages />
    </>
  );
}

export default App;
