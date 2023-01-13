import React from "react";
import "./styles.css";

import TeamSociais from "../TeamSociais";
import mee from "../../assets/img/AboutMe/mee.jpg";

export default function AboutComponent() {
  return (
    <div className="container-main" id="aboutMe">
      <h2 className="title-depositions">Quem sou</h2>
      <h6 className="title-depositions-secundary-About">
        Venha conhecer um pouco sobre mim !
      </h6>

      <div className="aboute-container">
        <div className="imgs-container">
          <img className="img-nail" src={mee} alt="imagem naildesigner" />
        </div>

        <div className="myStory-container">
          <h5 className="name-client">Liziane Silva</h5>
          <span className="client-description-span">
            Especialista em Designer de Unhas
          </span>
          <br />
          <p>
            Olá, Queridas clientes!
            <br />
            Meu chamo Liziane, mãe de uma princesa e sou completamente
            apaixonada pela minha profissão.
          </p>
          <br />
          <p>
            Meu foco é atender com carinho e com dedicação cada cliente e
            priorizando sempre o melhor resultado.{" "}
          </p>
          <p>
            Meu maior objetivo é fazer com que cada cliente se sinta ainda mais
            bela !
          </p>
          <br />
          <p> Venha se cuidar e conversar um pouco, vou adorar te conhecer!</p>
          <TeamSociais />
        </div>
      </div>
    </div>
  );
}
