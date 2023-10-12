import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../src/image/affordable-phones-assembled.jpg";
import image2 from "../src/image/case-ceell.jpg";
import image3 from "../src/image/mobile-phone-1875813_1280.jpg";
import image4 from '../src/image/74eaa6e4446bb573a480350386ad1586.png'
import '../src/Slider.css'
// import { Image } from "semantic-ui-react";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
const images = [image1, image2, image3];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Slider = ({ deviceType }) => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={false}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      autoPlaySpeed={2000}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
      className={"mainSlider"}
    >
      <div>
        {/* <div className="subText">
          <div className="directMsg">Director's Message</div>
          <div className="subPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div> */}
        <img width="100%" height="300px" src={image4} />
      </div>
      <div>
        <img width="100%" height="300px" src={image2} />
      </div>
      <div>
        <img width="100%" height="300px" src={image3} />
      </div>
      <div>
        <img width="100%" height="300px" src={image1} />
      </div>
      {/* {images.map((image) => {
        return (
          <img
            draggable={false}
            style={{ width: "50%", height: "50%" }}
            src={image}
          />
        );
      })} */}
    </Carousel>
  );
};

export default Slider;
