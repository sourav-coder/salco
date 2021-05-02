import React from "react";
import Teamdesc from "./Teamdesc";
import img1 from "../images/profile3 (3).jpg";
import img2 from "../images/profile3 (2).jpg";


export default function TeamCarousel() {
  return (

    <div id={"teams"}>
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade  carousel-dark TeamCarousel"
      data-bs-ride="carousel"
    >
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <Teamdesc img={img1} />
        </div>

        <div class="carousel-item ">
          <Teamdesc img={img2} />
        </div>
      </div>          

    </div>
  </div>
  );
}
