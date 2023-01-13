import React from "react";
import "./styles.css";

import logoo from "../../../../assets/img/logoo.jpg";

export const DetailsFooter = () => {
  return (
    <div className="footer-details-container">
      <div className="logo-footer-container">
        <img className="logo-footer" src={logoo} alt="logo" />
        <span>
          Designer especialista em alongamento de unhas e sou completamente
          apaixonada pelo meu trabalho ❤ <br />
          Não faça drama , faça as suas unhas !
        </span>
      </div>
    </div>
  );
};
