import React from "react";
import img1 from "../images/6685.jpg";
import { Link } from "react-router-dom";
import Modal from "./Modal"


export default function Business() {
  return (
    <div className="allThree" id="Business">
      <div className="row ">
        <div className="col-md-6 allThreeImg">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-6 allThreeHeader" >
          <h4>For Businesses</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            minus sint in quo, est consequatur libero quasi id eius? Dolor a
            voluptatum fugiat impedit inventore porro cum cumque numquam
            exercitationem.
          </p>
          <Link>
            {/* <Button className="button">Join Us</Button> */}
            <Modal />
          </Link>
        </div>
      </div>
    </div>
  );
}
