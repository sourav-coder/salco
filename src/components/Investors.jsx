import React from "react";
import img1 from "../images/6143.jpg";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Investors() {
  return (
    <div className="allThree" id="Investors">
      <div className="row ">

        <div className="col-md-6 allThreeImg hide">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-6 allThreeHeader">
          <h4>For Investors</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            minus sint in quo, est consequatur libero quasi id eius? Dolor a
            voluptatum fugiat impedit inventore porro cum cumque numquam
            exercitationem.
          </p>
          <Link>
            <Modal />
          </Link>
        </div>
        <div className="col-md-6 allThreeImg hidenext">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
