import React from "react";
import "./styles.css";

export const ContactFooter = ({ name, subTitle }) => {
  return (
    <div className="contact-details-container" >
      <ul>
        <li>
          <p> {name}</p>
        </li>

        <li>
          <p> {subTitle}</p>
        </li>
      </ul>
    </div>
  );
};
