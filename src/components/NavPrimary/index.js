import React from "react";
import "./styles.css";

import { Link } from "react-scroll";

import logo from "../../assets/img/logoo.jpg";
import ButtonContact from "../ButtonContact";

export const NavBarPrimary = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img className="logo1" src={logo} alt="Liziane Silva" />
      </a>

      <ul className="list">
        <li className="item">
          <a href="/">HOME</a>
        </li>

        <li className="item">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            SERVIÇOS
          </Link>
        </li>

        <li className="item">
          <Link
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            QUEM SOU
          </Link>
        </li>

        <li className="item">
          <Link
            to="localization"
            spy={true}
            smooth={true}
            offset={300}
            duration={500}
          >
            LOCALIZAÇÃO
          </Link>
        </li>

        <li className="item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <ButtonContact />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
