import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Application() {
  return (
    <>
      <Navbar />
      <div className="Application">
        <div className="posts">
        <h2>Announcements</h2>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Nodejs Developer</h5>
              <p class="card-text text-gray-100 fs-6  pt-2 mb-0">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" class="button">
                <Button>SEE MORE</Button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
