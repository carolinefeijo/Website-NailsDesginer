import React from "react";
import "./styles.css";

import facebook from "../../assets/img/Redes/facebook.png";
import instagram from "../../assets/img/Redes/instagram.png";
import whatsApp from "../../assets/img/Redes/whatsApp.png";

export const Midias = () => {
  return (
    <div className="midias-container">
      <a href="https://www.facebook.com/profile.php?id=100004621325427">
        <img className="logo-img" src={facebook} alt="facebook" />
      </a>

      <a href="https://www.instagram.com/lizzy.n.a.i.l.s/">
        <img className="logo-img" src={instagram} alt="instagram" />
      </a>

      <a href="https://wa.link/50yd6r">
        <img className="logo-img" src={whatsApp} alt="whatsApp" />
      </a>
    </div>
  );
};
