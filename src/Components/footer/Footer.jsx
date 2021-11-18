import React from "react";

import { SocialIcon } from "react-social-icons";

import "./footer.css";

export default function Footer() {
  return (
    <div className="social-container">
      <h3>חפשו אותנו</h3>
      <div>
        <SocialIcon
          style={{ margin: "10px" }}
          url="https://www.facebook.com/makomtov42"
        />
        <SocialIcon url="https://www.instagram.com/makom_tov_lashevet123/" />
      </div>
      <br />
      <div>Ofek Finegold &copy; {new Date().getFullYear()}</div>
    </div>
  );
}
