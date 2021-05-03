import React from 'react'
// import img1 from "../images/4563775.jpg";
import {Link } from "react-router-dom"

export default function Intern(){
    return (
        <div className="intern" id="intern">

            

            <div className="row">
                <div className="col-md-12">
                    <h1>We&#39;re Hiring</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            minus sint in quo, est consequatur libero quasi id eius? Dolor a</p>
            <Link to="/application" target="_blank"><button className="button">JOIN US</button></Link>

                </div>
                {/* <div className="col-md-6"> */}
                    {/* <img src={img1} alt=""/> */}
                {/* </div> */}
            </div>
        </div>
    )
}