import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Application() {
  return (
    <>
      <div className="Application">
        <h1>Applicants</h1>
        <div className="posts">
          {/* 1 */}
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Nodejs Developer</h5>
              <p class="card-text text-gray-100">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="/submit" target="_blank"><Button className="button">Apply</Button></Link>
            </div>
          </div>

          {/* 2 */}
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Nodejs Developer</h5>
              <p class="card-text text-gray-100">
                With supporting text below as a natural lead-in to additiona
                content.
              </p>
              <Link to="/submit" target="_blank"><Button className="button">Apply</Button></Link>
            </div>
          </div>

          {/* 3 */}
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Nodejs Developer</h5>
              <p class="card-text text-gray-100">
                With supporting text below as a natural lead-in to additiona
                content.
              </p>
              <Link to="/submit" target="_blank"><Button className="button">Apply</Button></Link>
            </div>
          </div>

          {/* 4 */}
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Nodejs Developer</h5>
              <p class="card-text text-gray-100">
                With supporting text below as a natural lead-in to additiona
                content.
              </p>
              <Link to="/submit" target="_blank"><Button className="button">Apply</Button></Link>
            </div>
          </div>

        
        </div>
      </div>
      <Footer />
    </>
  );
}
