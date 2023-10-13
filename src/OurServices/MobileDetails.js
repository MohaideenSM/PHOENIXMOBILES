import React from "react";
import "./MobileDetails.css";
import mobile from "../image/vivo.webp";

const MobileDetails = () => {
  return (
    <div className="mobile-details-main">
      <div className="mobile-details-image">
        <img width="400px" height="450px" src={mobile} />
      </div>
      {/* <div className="mobDtl">
        <div className="prdtDtl">
          <div>Mobile</div>
          <div>RAM</div>
          <div>Memory</div>
          <div>Battery</div>
          <div>Color</div>
          <div>Processor</div>
          <div>Price</div>
        </div>
        <div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
          <div>:</div>
        </div>
        <div>
          <div>Iphone</div>
          <div>12GB</div>
          <div>256GB</div>
          <div>5000Mah</div>
          <div>Blue</div>
          <div>MediaTek</div>
          <div>40,000Rs</div>
        </div>
      </div> */}
      
      <div className="mobileDetails">
        <div>Mobile</div>
        <div>:</div>
        <div>Iphone</div>

        <div>RAM</div>
        <div>:</div>
        <div>12GB</div>

        <div>Memory</div>
        <div>:</div>
        <div>256GB</div>

        <div>Battery</div>
        <div>:</div>
        <div>5000Mah</div>

        <div>Color</div>
        <div>:</div>
        <div>Blue</div>

        <div>Processor</div>
        <div>:</div>
        <div>MediaTek</div>

        <div>Price</div>
        <div>:</div>
        <div>40,000Rs</div>
      </div>
      <div className="buttons">
        <button>Add Craft</button>
        <button>BUY</button>
      </div>
    </div>
  );
};

export default MobileDetails;
