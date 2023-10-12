import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesFile from "./RoutesPage";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header />
        <div style={{ flex: "1", overflowY: "auto",    margin:" 15px"
 }}>
          <RoutesFile />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
