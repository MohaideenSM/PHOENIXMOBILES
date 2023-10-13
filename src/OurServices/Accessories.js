import React from 'react'
import "../OurServices/NewMobiles.css";
import image1 from '../image/bigheadphones.png';
import image2 from '../image/case.png';
import image3 from '../image/charger.png';
import image4 from '../image/earbuds.png';
import image5 from '../image/headphones.png';
import image6 from '../image/temperglass.png';
import image7 from '../image/earbuds.png';

function Accessories() {
    const NewMobilesDetails = [
        {
            Img: (
                <img
                  style={{ width: "100px", height: "100px" }}
                  className="our_service_img"
                  src={image1}
                ></img>
              ),
          ModelName: "Boat",
        },
        {
          Img: (
            <img
              style={{ width: "100px", height: "100px" }}
              className="our_service_img"
              src={image2}
            ></img>
          ),
          ModelName: "Case",
        },
        {
            Img: (
              <img
                style={{ width: "100px", height: "100px" }}
                className="our_service_img"
                src={image3}
              ></img>
            ),
            ModelName: "Charger",
          },
          {
            Img: (
                <img
                  style={{ width: "100px", height: "100px" }}
                  className="our_service_img"
                  src={image4}
                ></img>
              ),
          ModelName: "Zebronics",
        },
        {
          Img: (
            <img
              style={{ width: "100px", height: "100px" }}
              className="our_service_img"
              src={image5}
            ></img>
          ),
          ModelName: "Samsung",
        },
        {
            Img: (
              <img
                style={{ width: "100px", height: "100px" }}
                className="our_service_img"
                src={image6}
              ></img>
            ),
            ModelName: "Temper glass",
          },
          {
            Img: (
                <img
                  style={{ width: "100px", height: "100px" }}
                  className="our_service_img"
                  src={image7}
                ></img>
              ),
          ModelName: "LG",
        },
        
      ];
      return (
        <>
            <div className="our_service_heading">Available Accessories </div>

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
export default Accessories