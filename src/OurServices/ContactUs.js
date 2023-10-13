import React from "react";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Instagram from "../image/instagram.png";
import Whatsapp from "../image/whatsapp.png";
import "../OurServices/ContactUs.css";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
function ContactUs() {
  const handleEmailClick = () => {
    const email = "mydeenmf0815@gmail.com"; // Change this to the recipient's email address
    const subject = "Your Subject"; // Change this to the desired subject
    const body = "Your email body goes here."; // Change this to the desired email body

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <>
      <div className="contactUsMain">
        <div className="contact-main">
          <div className="contact-logo">
            <CallRoundedIcon />
          </div>
          <div className="lo">
            <ForwardRoundedIcon />
          </div>
          <div className="contact-details">
            {" "}
            <a style={{ color: "blue" }} href="">
              +919080483616
            </a>
          </div>
        </div>
        {/* <div className="contact-main">
        <div className="email-logo">
          <LocalPostOfficeRoundedIcon />
        </div>
        <div className="lo">
          <ForwardRoundedIcon />
        </div>
        <div className="email-details">
          <a onClick={handleEmailClick} style={{ color: "chocolate" }}>Phoenix Mobiles</a>
        </div>
      </div> */}
        <div className="contact-main">
          <div className="whatsapp-logo">
            <img
              style={{ width: "30px", height: "30px", width: " 25px" }}
              src={Whatsapp}
              alt="whatsapp"
            ></img>
          </div>
          <div className="lo">
            <ForwardRoundedIcon />
          </div>
          <div className="whatsapp-details">
            {" "}
            <a style={{ color: "green" }} href="https://wa.me/<9080483616> ">
              Phoenix Mobiles
            </a>
          </div>
        </div>
        <div className="contact-main">
          <div className="instagram-logo">
            <img
              style={{ width: "30px", height: "30px", width: " 25px" }}
              src={Instagram}
              alt="Instagram"
            ></img>
          </div>
          <div className="lo">
            <ForwardRoundedIcon />
          </div>
          <div className="instagram-details">
            {" "}
            <a
              style={{ color: "blue" }}
              href="https://instagram.com/phoenix_mobile_tn76?igshid=MzRIODBiNWFIZA=="
            >
              Phoenix Mobiles
            </a>
          </div>
        </div>
        <div className="contact-main">
          <div className="location-logo">
            <LocationOnRoundedIcon />
          </div>
          <div className="lo">
            <ForwardRoundedIcon />
          </div>
          <div className="location-details">
            <a style={{ color: "red" }} href="">
              Phoenix Mobiles
            </a>
          </div>
        </div>
      </div>
      <div className="contact-address">
 
        <div className="our_service_heading">Our Shop Address</div>
        <div className="contact-address-main">
          <div className="contact-address-left"><div className="lest_div">Shop Name</div><div>:</div></div>
          <div>Phoenix Mobiles</div>
        </div>
        <div className="contact-address-main">
          <div className="contact-address-left"><div className="lest_div">Address</div><div>:</div></div>
          <div>123 Madurai Main Road,Tenkasi.</div>
        </div>
        <div className="contact-address-main">
          <div className="contact-address-left"><div className="lest_div">State</div><div>:</div></div>
          <div>Tamilnadu.</div>
        </div>
        <div className="contact-address-main">
          <div className="contact-address-left"><div className="lest_div">Phone</div><div>:</div></div>
          <div>9080483616</div>
        </div>
   
      </div>
    </>
  );
}

export default ContactUs;
