import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h1 class="logo-text">
            <span>Salt</span>Co
          </h1>
          <p>
            AwaInspires is a fictional blog conceived for the purpose of a
            tutorial on YouTube. However, Awa has a blog called
            pieceofadvice.org where he writes truly inspiring stuff.
          </p>
          <div class="contact">
            <span>
              <i class="fas fa-phone"></i> &nbsp; 123-456-789
            </span>
            <span>
              <i class="fas fa-envelope"></i> &nbsp; info@awainspires.com
            </span>
          </div>
          <div class="socials">
            <Link>
              <i class="fab fa-facebook"></i>
            </Link>
            <Link>
              <i class="fab fa-instagram"></i>
            </Link>
            <Link>
              <i class="fab fa-twitter"></i>
            </Link>
            <Link>
              <i class="fab fa-youtube"></i>
            </Link>
          </div>
        </div>

        <div class="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <Link to="/#about" target="__blank">
              <li>About</li>
            </Link>
            <Link to="/#teams" target="__blank">
              <li>Teams</li>
            </Link>
            <Link to="/#Business" target="__blank">
              <li>Business</li>
            </Link>
            <Link to="/#Indivisual" target="__blank">
              <li>Indivisual</li>
            </Link>
            <Link to="/#Investors" target="__blank">
              <li>Investors</li>
            </Link>
          </ul>
        </div>

        <div class="footer-section contact-form">
          <h2>Contact us</h2>
          <br />
          <form action="index.html" method="post">
            <input
              type="email"
              name="email"
              class="text-input contact-input"
              placeholder="Your email address..."
            ></input>
            <textarea
              rows="4"
              name="message"
              class="text-input contact-input"
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="button">
              Send
            </button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        &copy; codingpoets.com | Designed by Awa Melvine
      </div>
    </div>
  );
}
