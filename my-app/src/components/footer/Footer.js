import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <p>Shop By Category </p>
        <Link
          className="footerLink"
          to="/womens"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Womens
        </Link>
        <Link
          className="footerLink"
          to="/mens"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Mens
        </Link>
        <Link
          className="footerLink"
          to="/electronics"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Home
        </Link>
        <Link
          className="footerLink"
          to="/jewelery"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Accessories
        </Link>
      </div>
      <div>
        <p className="copyright">© {date} EcoStore. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
