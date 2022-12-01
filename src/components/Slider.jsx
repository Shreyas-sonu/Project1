import React from "react";
import crs1 from "./../assets/crs1.jpg";
import crs2 from "./../assets/crs2.jpg";
import crs3 from "./../assets/crs3.jpg";
import crs4 from "./../assets/crs4.jpg";
import crs5 from "./../assets/crs5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop showIndicators={false} showArrows={false} showStatus={false} width="70%" stopOnHover={false} transitionTime="2000">
      <div>
        <img src={crs1} />
      </div>
      <div>
        <img src={crs2} />
      </div>
      <div>
        <img src={crs3} />
      </div>
      <div>
        <img src={crs4} />
      </div>
      <div>
        <img src={crs5} />
      </div>
    </Carousel>
  );
};

export default Slider;
