import React from "react";
import "../OurServices/NewMobiles.css";
import image2 from "../image/vivo.webp";

function NewMobiles() {
  const NewMobilesDetails = [
    {
        Img: (
            <img
              style={{ width: "100px", height: "100px" }}
              className="our_service_img"
              src={image2}
            ></img>
          ),
      ModelName: "Vivo v21 e 5G",
    },
    {
      Img: (
        <img
          style={{ width: "100px", height: "100px" }}
          className="our_service_img"
          src={image2}
        ></img>
      ),
      ModelName: "Iphone",
    },
    {
        Img: (
          <img
            style={{ width: "100px", height: "100px" }}
            className="our_service_img"
            src={image2}
          ></img>
        ),
        ModelName: "Samsung",
      },
      {
        Img: (
            <img
              style={{ width: "100px", height: "100px" }}
              className="our_service_img"
              src={image2}
            ></img>
          ),
      ModelName: "Vivo v21 e 5G",
    },
    {
      Img: (
        <img
          style={{ width: "100px", height: "100px" }}
          className="our_service_img"
          src={image2}
        ></img>
      ),
      ModelName: "Iphone",
    },
    {
        Img: (
          <img
            style={{ width: "100px", height: "100px" }}
            className="our_service_img"
            src={image2}
          ></img>
        ),
        ModelName: "Samsung",
      },
      {
        Img: (
            <img
              style={{ width: "100px", height: "100px" }}
              className="our_service_img"
              src={image2}
            ></img>
          ),
      ModelName: "Vivo v21 e 5G",
    },
    {
      Img: (
        <img
          style={{ width: "100px", height: "100px" }}
          className="our_service_img"
          src={image2}
        ></img>
      ),
      ModelName: "Iphone",
    },
    {
        Img: (
          <img
            style={{ width: "100px", height: "100px" }}
            className="our_service_img"
            src={image2}
          ></img>
        ),
        ModelName: "Samsung",
      },
      {
        Img: (
            <img
              style={{ width: "100px", height: "100px" }}
              className="our_service_img"
              src={image2}
            ></img>
          ),
      ModelName: "Vivo v21 e 5G",
    },
    {
      Img: (
        <img
          style={{ width: "100px", height: "100px" }}
          className="our_service_img"
          src={image2}
        ></img>
      ),
      ModelName: "Iphone",
    },
    {
        Img: (
          <img
            style={{ width: "100px", height: "100px" }}
            className="our_service_img"
            src={image2}
          ></img>
        ),
        ModelName: "Samsung",
      },
  ];
  return (
    <>
    <div className="our_service_heading">Available New Mobiles</div>
      <div className="new-mobile-main-top">
        {NewMobilesDetails.map((NewMobilesDetails) => {
          return (
            <div className="new-mobile-main">
              <div className="new-mobile-img">{NewMobilesDetails.Img}</div>
              <div className="Model">{NewMobilesDetails.ModelName}</div>
            </div>
          );
        })}
      </div>

      {/* { NewMobilesDetails.map((NewMobilesDetails)=>{
    return(
    <div className="new-mobile-main-div">
        <div className="new-mobile-img">{NewMobilesDetails.Img}</div>
        <div className="new-mobile-main">
          <div className="new-mobile-heading-main">
            <span className="new-mobile-heading-first">Model </span>
            <div className="new-mobile-heading-main-:">:</div>
          </div>
          <div className="new-mobiles-details">{NewMobilesDetails.ModelName}</div>
        </div>
        <div className="new-mobile-main">
          <div className="new-mobile-heading-main">
            <span className="new-mobile-heading-first"> Price</span>
            <div className="new-mobile-heading-main-:">:</div>
          </div>
          <div className="new-mobiles-details">{NewMobilesDetails.OurPrice}</div>
        </div>
        <div className="new-mobile-main">
          <div className="new-mobile-heading-main">
            <span className="new-mobile-heading-first"> Colors</span>
            <div className="new-mobile-heading-main-:">:</div>
          </div>
          <div className="new-mobiles-details">{NewMobilesDetails.colors}</div>
        </div>
        <div className="new-mobile-main">
          <div className="new-mobile-heading-main">
            <span className="new-mobile-heading-first"> Ram</span>
            <div className="new-mobile-heading-main-:">:</div>
          </div>
          <div className="new-mobiles-details">  {NewMobilesDetails.Ram}</div>
        </div>
        <div className="new-mobile-main">
          <div className="new-mobile-heading-main">
            <span className="new-mobile-heading-first"> Battery</span>
            <div className="new-mobile-heading-main-:">:</div>
          </div>
          <div className="new-mobiles-details"> {NewMobilesDetails.battery}</div>
        </div>
      </div>
      ) 
*/}
    </>
  );
}

export default NewMobiles;
