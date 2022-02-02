import React from "react";
import Home from "./Pages/Home";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Rodape from "./Components/Rodape/Rodape";
//import {BrowserRouter as Router, Route} from "react-router-dom"
//import Produtos from "./Pages/Produtos";
//import Contato from "./Pages/Contato";
//import Pagina404 from "./Pages/Pagina404"

function App() {
  return (
    <>
      <GlobalStyle />
        <Cabecalho/>
        <Home />
        <Rodape />
    </>
  );
}

export default App;
