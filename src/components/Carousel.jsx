import React from "react";
import img1 from "../images/main_pic.png"
import img2 from "../images/women_handbags_pic.png"
import img3 from "../images/women_tshirt_pic.PNG"



export default function Carousel() {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade carousel-dark headCarousel"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} class="d-block w-100" alt=""></img>
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block w-100" alt=""></img>
        </div>
        <div class="carousel-item">
          <img src={img3} class="d-block w-100" alt=""></img>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
