import React, { useEffect } from "react";
import "../src/Footer.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();

  return (
    <>

      <div className="footer_main">
<div className="one" onClick={()=> navigate("/")}> <HomeOutlinedIcon/><div>Home</div></div>
<div className="one" onClick={()=> navigate("/Accessories")}><BuildOutlinedIcon/><div>Accessories</div></div>
<div className="one" onClick={()=> navigate("/ContactUs")}><AddIcCallOutlinedIcon/> <div>Contact</div></div>
<div className="one" onClick={()=> navigate("/About")}><AccountCircleOutlinedIcon/><div>About</div></div>
      </div>
    </>
  );
}

export default Footer;
