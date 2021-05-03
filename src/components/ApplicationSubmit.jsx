import React from "react";
import Navbar from "./Navbar";
import {Button,Link} from "@material-ui/core"
import Footer from "./Footer"

export default function ApplicationSubmit() {
  return (
    <>
      <div className="ApplicationSubmit">
        <h1>NODEJS DEVELOPER</h1>
        <div className="responsibilities">
          <h2>Your Responsibilities</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
          </ul>
        </div>

        <div className="mustHave">
          <h2>MUST HAVE</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
          </ul>
        </div>

        <div className="goodToHave">
          <h2>Good to HAVE</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, accu
            </li>
          </ul>
        </div>

        <Button className="button"><Link>APPLY NOW</Link></Button>

      </div>
      <Footer />
    </>
  );
}
