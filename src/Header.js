import React, { useEffect } from "react";
import logo from "../src/image/74eaa6e4446bb573a480350386ad1586.png";
import "../src/Header.css";
import { useNavigate } from "react-router-dom";
import "animate.css";
import MenuIcon from "@mui/icons-material/Menu";
import smoke from '../src/image/smoke.gif';

function Header() {

  return (
    <>
      <div className="header_main">
        <div className="sign">
          <span className="fast-flicker">PH</span>OE<span className="flicker">N</span>IX
          <div className="mobile_header">Mobiles</div>
        </div>
      </div>
    </>
  );
}

export default Header;
