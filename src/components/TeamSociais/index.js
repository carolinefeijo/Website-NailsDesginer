import React from "react";
import "./styles.css";

import facebook from "../../assets/img/Redes/facebook.png";
import instagram from "../../assets/img/Redes/instagram.png";

export default function TeamSociais() {
  return (
    <div className="midias-team-container">
      <a href="https://www.facebook.com/profile.php?id=100004621325427">
        <img className="logo-img-team" src={facebook} alt="facebook" />
      </a>

      <a href="https://www.instagram.com/lizzy.n.a.i.l.s/">
        <img className="logo-img-team" src={instagram} alt="instagram" />
      </a>
    </div>
  );
}
