import React from "react";
import Slider from "./Slider";
import "../src/Home.css";
import image1 from "../src/image/newmobile.png";
import image2 from "../src/image/sell-old-phone.png";
import image3 from "../src/image/mobile-accessories.png";
import image4 from "../src/image/mobileservice.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home_main">
      <Slider />
      <div className="our_service">
        <div className="our_service_heading">Our Services</div>
        <div className="our_service_pics">
          <div className="our_service_one" onClick={()=> navigate("/NewMobiles")}>
            <img className="our_service_img" src={image1}></img><div className="our_service_one_tem">New Mobiles</div>
          </div>
          <div className="our_service_one" onClick={()=> navigate("/UsedMobiles")}>
            <img className="our_service_img" src={image2}></img><div className="our_service_one_tem">Used Mobiles</div>
          </div>
          <div className="our_service_one" onClick={()=> navigate("/Accessories")}>
            <img className="our_service_img" src={image3}></img><div className="our_service_one_tem">Accessories</div>
          </div>
          <div className="our_service_one" onClick={()=> navigate("/Services")}>
            <img className="our_service_img" src={image4}></img><div className="our_service_one_tem">Services</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
