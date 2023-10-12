import React from 'react'
import image2 from "../image/vivo.webp";
import "../OurServices/NewMobiles.css";

function UsedMobiles() {
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
      ];
      return (
        <>
            <div className="our_service_heading">Available Old Mobiles</div>

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
          </>
  );
}
export default UsedMobiles