import React from "react";
import carouselImg from "../images/about_pc.png";
import img1 from "../images/profile3 (1).jpg"
import img2 from "../images/profile3 (2).jpg"
// import img3 from "../images/women_tshirt_pic.PNG"
import carouselImgMob from "../images/about_mob.png"



export default function About() {
  return (
    <div className="about" id="about">
      <img src={carouselImg} className="img-fluid imgDex" alt="" />
      <img src={carouselImgMob}  className="img-fluid imgmob" alt=""/>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">

        <div class="row carousel-inner">
          <div class="col-md-4 carousel-item active">
            <img src={img1}  alt="..."></img>
            <img src={img2}  alt="..."></img>
            <img src={img1} alt="..."></img>
            <img src={img1} alt="..."></img>
            <img src={img2} alt="..."></img>
            <img src={img2} alt="..."></img>


            
          </div>
          <div class="col-md-4 carousel-item">
            <img src={img2}  alt="..."></img>
            <img src={img1}  alt="..."></img>
            <img src={img1}  alt="..."></img>
            <img src={img2} alt="..."></img>
            <img src={img2} alt="..."></img>
            <img src={img2} alt="..."></img>



          </div>
          <div class="col-md-4 carousel-item">
            <img src={img2}  alt="..."></img>
            <img src={img2}  alt="..."></img>
            <img src={img2} alt="..."></img>
            <img src={img2} alt="..."></img>
            <img src={img2} alt="..."></img>
            <img src={img2} alt="..."></img>




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
    </div>
  );
}
